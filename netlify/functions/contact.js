export async function handler(event) {
  try {
    console.log("📩 Incoming body:", event.body);

    const { name, email, message } = JSON.parse(event.body);

    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    console.log("🔑 Webhook URL present?", !!webhookUrl);

    if (!webhookUrl) {
      return { statusCode: 500, body: "Missing webhook URL" };
    }

    const payload = {
      content: `**New Contact Form Submission**\n**Name:** ${name}\n**Email:** ${email}\n**Message:** ${message}`,
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
