const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    EmbedBuilder
} = require("discord.js");

async function sendPanel(channel) {
    const embed = new EmbedBuilder()
        .setTitle("🏛️ CIA-System")
        .setDescription("اضغط الزر أدناه للدخول إلى لوحة الكنترول.")
        .setColor("#0B3D91");

    const row = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
            .setCustomId("control_login")
            .setLabel("🔓 دخول الكنترول")
            .setStyle(ButtonStyle.Primary)
    );

    await channel.send({
        embeds: [embed],
        components: [row]
    });
}

module.exports = { sendPanel };
