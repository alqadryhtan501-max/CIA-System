const {
    EmbedBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle
} = require("discord.js");

module.exports = {
    name: "interactionCreate",

    async execute(interaction) {

        if (!interaction.isButton()) return;

        if (interaction.customId !== "control_login") return;

        const embed = new EmbedBuilder()
            .setTitle("🏛️ لوحة الكنترول")
            .setDescription(
`👤 الاسم: ${interaction.user.username}

🆔 الرمز: AG-XX

🎖️ الرتبة: سيتم تحديدها لاحقًا`
            )
            .setColor("#0b3d91");

        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId("members")
                    .setLabel("👤 الأعضاء")
                    .setStyle(ButtonStyle.Secondary),

                new ButtonBuilder()
                    .setCustomId("training")
                    .setLabel("🎓 التدريب")
                    .setStyle(ButtonStyle.Secondary),

                new ButtonBuilder()
                    .setCustomId("logs")
                    .setLabel("📜 Logs")
                    .setStyle(ButtonStyle.Secondary)
            );

        await interaction.reply({
            embeds: [embed],
            components: [row],
            ephemeral: true
        });

    }
};
