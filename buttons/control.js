const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    EmbedBuilder
} = require("discord.js");

module.exports = {

    async sendPanel(channel) {

        const embed = new EmbedBuilder()
            .setTitle("🏛️ CIA-System")
            .setDescription(
                "مرحبًا بك في نظام CIA.\n\nاضغط الزر أدناه للدخول إلى لوحة الكنترول."
            )
            .setColor("#0b3d91");

        const row = new ActionRowBuilder()
            .addComponents(
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

};
