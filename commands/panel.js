const {
    SlashCommandBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    EmbedBuilder
} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("panel")
        .setDescription("لوحة تحكم CIA-System"),

    async execute(interaction) {

        const embed = new EmbedBuilder()
            .setTitle("🏛️ CIA-System")
            .setDescription("اختر الخدمة المطلوبة من الأزرار بالأسفل.")
            .setColor("#0b3d91");

        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId("profile")
                    .setLabel("📁 ملف العضو")
                    .setStyle(ButtonStyle.Primary),

                new ButtonBuilder()
                    .setCustomId("missions")
                    .setLabel("📋 المهام")
                    .setStyle(ButtonStyle.Success),

                new ButtonBuilder()
                    .setCustomId("reports")
                    .setLabel("📊 التقارير")
                    .setStyle(ButtonStyle.Secondary),

                new ButtonBuilder()
                    .setCustomId("admin")
                    .setLabel("🛡️ الإدارة")
                    .setStyle(ButtonStyle.Danger)
            );

        await interaction.reply({
            embeds: [embed],
            components: [row],
            ephemeral: true
        });
    }
};
