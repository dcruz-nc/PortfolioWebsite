export async function handler(event) {
  try {
    console.log("📩 Incoming body:", event.body);

    const { name, email, subject, message, webhookUrl } = JSON.parse(event.body);
    
    // Validate required fields
    if (!name || !email || !subject || !message) {
      console.error("❌ Missing required fields:", { name: !!name, email: !!email, subject: !!subject, message: !!message });
      return { statusCode: 400, body: "Missing required fields" };
    }

    console.log("🔑 Webhook URL present?", !!webhookUrl);

    if (!webhookUrl) {
      // For testing without Discord, just log the message
      console.log("📝 Contact form submission (no Discord webhook):", {
        name, email, subject, message
      });
      return { 
        statusCode: 200, 
        body: "Message received successfully! (Discord webhook not configured)" 
      };
    }

    const payload = {
      content: `**New Contact Form Submission**\n**Name:** ${name}\n**Email:** ${email}\n**Subject:** ${subject}\n**Message:** ${message}`,
    };

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    console.log("📡 Discord response status:", response.status);

    if (!response.ok) {
      return { statusCode: 500, body: "Failed to send message to Discord" };
    }

    return { statusCode: 200, body: "Message sent successfully" };
  } catch (err) {
    console.error("❌ Function error:", err);
    return { statusCode: 500, body: `Error: ${err.message}` };
  }
}
