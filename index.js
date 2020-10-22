const Telegraf = require('telegraf')
BOT_TOKEN = '1182083268:AAGfDX3fhq5S3-qaIb3ELvYiThMD-uHm8yk'
const bot = new Telegraf(BOT_TOKEN)
bot.start((ctx) => {
    ctx.reply("Bot Başlatıldı")

})

bot.hears(/var mı/ig, async (ctx, next) => {
    ctx.telegram.sendMessage(ctx.chat.id, '🧐Aradığın kitap 2019-2020 basım bir kitap mı?',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Evet 👍🏻", callback_data: "1"}],
                [{text: "Hayır 👎🏻", callback_data: "2"}]
            ]
        }
    })
})

bot.action('2', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, '📬 Aradığın kitap grup kütüphalerinde daha önce paylaşılmış olabilir.\nKütüphanelere göz attın mı?',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Evet 👍🏻", callback_data: "3"}],
                [{text: "Hayır 👎🏻", callback_data: "4"}]
            ]
        }
    })

})
bot.action('1', (ctx) => {
    ctx.deleteMessage()
    ctx.reply('Güncel basım olan kitapların telif haklarından dolayı pdf/epub formatları bulunmadığı için sana yardımcı olamam maalesef😔')

})
bot.action('4', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, 'Kütüphanelere göz atman için aşağıdaki butonu kullanabilirsin',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Grup Kütüphaneleri", url: "https://telegra.ph/K%C3%9CT%C3%9CPHANELER-03-28"}]
            ]
        }
    })
    
})

bot.action('3', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, "✅ Sorunu Paylaşım Ekibine  ' @paylasimekibi1 ' bildirdim.😊\nAradığın bir kitap ise aşağıdaki ilgili kütüphaneye eklenecek, bu yüzden bildirimlerini açık tutmalısın🔔",
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "📕Roman, Hikaye & Bilim Kitapları📕", url: "https://t.me/joinchat/AAAAAFVkSbJObWQNLfLMAQ"}],
                [{text: "📚Eğitim Kitapları📚", url: "https://t.me/joinchat/AAAAAFOIaTAr4kWJ_SifQg"}],
                [{text: "🔥Çizgi Romanlar🔥", url: "https://t.me/joinchat/AAAAAEUVQ1bImf6DujYnTQ"}]
            ]
        }
    })
})
bot.hears(/varmı/ig, async (ctx, next) => {
    ctx.telegram.sendMessage(ctx.chat.id, '🧐Aradığın kitap 2019-2020 basım bir kitap mı?',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Evet 👍🏻", callback_data: "1"}],
                [{text: "Hayır 👎🏻", callback_data: "2"}]
            ]
        }
    })
})

bot.action('2', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, '📬 Aradığın kitap grup kütüphalerinde daha önce paylaşılmış olabilir.\nKütüphanelere göz attın mı?',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Evet 👍🏻", callback_data: "3"}],
                [{text: "Hayır 👎🏻", callback_data: "4"}]
            ]
        }
    })

})
bot.action('1', (ctx) => {
    ctx.deleteMessage()
    ctx.reply('Güncel basım olan kitapların telif haklarından dolayı pdf/epub formatları bulunmadığı için sana yardımcı olamam maalesef😔')

})
bot.action('4', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, 'Kütüphanelere göz atman için aşağıdaki butonu kullanabilirsin',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Grup Kütüphaneleri", url: "https://telegra.ph/K%C3%9CT%C3%9CPHANELER-03-28"}]
            ]
        }
    })
    
})

bot.action('3', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, "✅ Sorunu Paylaşım Ekibine  ' @paylasimekibi1 ' bildirdim.😊\nAradığın bir kitap ise aşağıdaki ilgili kütüphaneye eklenecek, bu yüzden bildirimlerini açık tutmalısın🔔",
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "📕Roman, Hikaye & Bilim Kitapları📕", url: "https://t.me/joinchat/AAAAAFVkSbJObWQNLfLMAQ"}],
                [{text: "📚Eğitim Kitapları📚", url: "https://t.me/joinchat/AAAAAFOIaTAr4kWJ_SifQg"}],
                [{text: "🔥Çizgi Romanlar🔥", url: "https://t.me/joinchat/AAAAAEUVQ1bImf6DujYnTQ"}]
            ]
        }
    })
})
bot.hears(/var mi/ig, async (ctx, next) => {
    ctx.telegram.sendMessage(ctx.chat.id, '🧐Aradığın kitap 2019-2020 basım bir kitap mı?',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Evet 👍🏻", callback_data: "1"}],
                [{text: "Hayır 👎🏻", callback_data: "2"}]
            ]
        }
    })
})

bot.action('2', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, '📬 Aradığın kitap grup kütüphalerinde daha önce paylaşılmış olabilir.\nKütüphanelere göz attın mı?',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Evet 👍🏻", callback_data: "3"}],
                [{text: "Hayır 👎🏻", callback_data: "4"}]
            ]
        }
    })

})
bot.action('1', (ctx) => {
    ctx.deleteMessage()
    ctx.reply('Güncel basım olan kitapların telif haklarından dolayı pdf/epub formatları bulunmadığı için sana yardımcı olamam maalesef😔')

})
bot.action('4', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, 'Kütüphanelere göz atman için aşağıdaki butonu kullanabilirsin',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Grup Kütüphaneleri", url: "https://telegra.ph/K%C3%9CT%C3%9CPHANELER-03-28"}]
            ]
        }
    })
    
})

bot.action('3', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, "✅ Sorunu Paylaşım Ekibine  ' @paylasimekibi1 ' bildirdim.😊\nAradığın bir kitap ise aşağıdaki ilgili kütüphaneye eklenecek, bu yüzden bildirimlerini açık tutmalısın🔔",
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "📕Roman, Hikaye & Bilim Kitapları📕", url: "https://t.me/joinchat/AAAAAFVkSbJObWQNLfLMAQ"}],
                [{text: "📚Eğitim Kitapları📚", url: "https://t.me/joinchat/AAAAAFOIaTAr4kWJ_SifQg"}],
                [{text: "🔥Çizgi Romanlar🔥", url: "https://t.me/joinchat/AAAAAEUVQ1bImf6DujYnTQ"}]
            ]
        }
    })
})
bot.hears(/varmi/ig, async (ctx, next) => {
    ctx.telegram.sendMessage(ctx.chat.id, '🧐Aradığın kitap 2019-2020 basım bir kitap mı?',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Evet 👍🏻", callback_data: "1"}],
                [{text: "Hayır 👎🏻", callback_data: "2"}]
            ]
        }
    })
})

bot.action('2', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, '📬 Aradığın kitap grup kütüphalerinde daha önce paylaşılmış olabilir.\nKütüphanelere göz attın mı?',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Evet 👍🏻", callback_data: "3"}],
                [{text: "Hayır 👎🏻", callback_data: "4"}]
            ]
        }
    })

})
bot.action('1', (ctx) => {
    ctx.deleteMessage()
    ctx.reply('Güncel basım olan kitapların telif haklarından dolayı pdf/epub formatları bulunmadığı için sana yardımcı olamam maalesef😔')

})
bot.action('4', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, 'Kütüphanelere göz atman için aşağıdaki butonu kullanabilirsin',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Grup Kütüphaneleri", url: "https://telegra.ph/K%C3%9CT%C3%9CPHANELER-03-28"}]
            ]
        }
    })
    
})

bot.action('3', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, "✅ Sorunu Paylaşım Ekibine  ' @paylasimekibi1 ' bildirdim.😊\nAradığın bir kitap ise aşağıdaki ilgili kütüphaneye eklenecek, bu yüzden bildirimlerini açık tutmalısın🔔",
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "📕Roman, Hikaye & Bilim Kitapları📕", url: "https://t.me/joinchat/AAAAAFVkSbJObWQNLfLMAQ"}],
                [{text: "📚Eğitim Kitapları📚", url: "https://t.me/joinchat/AAAAAFOIaTAr4kWJ_SifQg"}],
                [{text: "🔥Çizgi Romanlar🔥", url: "https://t.me/joinchat/AAAAAEUVQ1bImf6DujYnTQ"}]
            ]
        }
    })
})

bot.hears(/var mıdır/ig, async (ctx, next) => {
    ctx.telegram.sendMessage(ctx.chat.id, '🧐Aradığın kitap 2019-2020 basım bir kitap mı?',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Evet 👍🏻", callback_data: "1"}],
                [{text: "Hayır 👎🏻", callback_data: "2"}]
            ]
        }
    })
})

bot.action('2', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, '📬 Aradığın kitap grup kütüphalerinde daha önce paylaşılmış olabilir.\nKütüphanelere göz attın mı?',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Evet 👍🏻", callback_data: "3"}],
                [{text: "Hayır 👎🏻", callback_data: "4"}]
            ]
        }
    })

})
bot.action('1', (ctx) => {
    ctx.deleteMessage()
    ctx.reply('Güncel basım olan kitapların telif haklarından dolayı pdf/epub formatları bulunmadığı için sana yardımcı olamam maalesef😔')

})
bot.action('4', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, 'Kütüphanelere göz atman için aşağıdaki butonu kullanabilirsin',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Grup Kütüphaneleri", url: "https://telegra.ph/K%C3%9CT%C3%9CPHANELER-03-28"}]
            ]
        }
    })
    
})

bot.action('3', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, "✅ Sorunu Paylaşım Ekibine  ' @paylasimekibi1 ' bildirdim.😊\nAradığın bir kitap ise aşağıdaki ilgili kütüphaneye eklenecek, bu yüzden bildirimlerini açık tutmalısın🔔",
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "📕Roman, Hikaye & Bilim Kitapları📕", url: "https://t.me/joinchat/AAAAAFVkSbJObWQNLfLMAQ"}],
                [{text: "📚Eğitim Kitapları📚", url: "https://t.me/joinchat/AAAAAFOIaTAr4kWJ_SifQg"}],
                [{text: "🔥Çizgi Romanlar🔥", url: "https://t.me/joinchat/AAAAAEUVQ1bImf6DujYnTQ"}]
            ]
        }
    })
})
bot.hears(/varmıdır/ig, async (ctx, next) => {
    ctx.telegram.sendMessage(ctx.chat.id, '🧐Aradığın kitap 2019-2020 basım bir kitap mı?',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Evet 👍🏻", callback_data: "1"}],
                [{text: "Hayır 👎🏻", callback_data: "2"}]
            ]
        }
    })
})

bot.action('2', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, '📬 Aradığın kitap grup kütüphalerinde daha önce paylaşılmış olabilir.\nKütüphanelere göz attın mı?',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Evet 👍🏻", callback_data: "3"}],
                [{text: "Hayır 👎🏻", callback_data: "4"}]
            ]
        }
    })

})
bot.action('1', (ctx) => {
    ctx.deleteMessage()
    ctx.reply('Güncel basım olan kitapların telif haklarından dolayı pdf/epub formatları bulunmadığı için sana yardımcı olamam maalesef😔')

})
bot.action('4', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, 'Kütüphanelere göz atman için aşağıdaki butonu kullanabilirsin',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Grup Kütüphaneleri", url: "https://telegra.ph/K%C3%9CT%C3%9CPHANELER-03-28"}]
            ]
        }
    })
    
})

bot.action('3', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, "✅ Sorunu Paylaşım Ekibine  ' @paylasimekibi1 ' bildirdim.😊\nAradığın bir kitap ise aşağıdaki ilgili kütüphaneye eklenecek, bu yüzden bildirimlerini açık tutmalısın🔔",
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "📕Roman, Hikaye & Bilim Kitapları📕", url: "https://t.me/joinchat/AAAAAFVkSbJObWQNLfLMAQ"}],
                [{text: "📚Eğitim Kitapları📚", url: "https://t.me/joinchat/AAAAAFOIaTAr4kWJ_SifQg"}],
                [{text: "🔥Çizgi Romanlar🔥", url: "https://t.me/joinchat/AAAAAEUVQ1bImf6DujYnTQ"}]
            ]
        }
    })
})
bot.hears(/var mıdır/ig, async (ctx, next) => {
    ctx.telegram.sendMessage(ctx.chat.id, '🧐Aradığın kitap 2019-2020 basım bir kitap mı?',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Evet 👍🏻", callback_data: "1"}],
                [{text: "Hayır 👎🏻", callback_data: "2"}]
            ]
        }
    })
})

bot.action('2', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, '📬 Aradığın kitap grup kütüphalerinde daha önce paylaşılmış olabilir.\nKütüphanelere göz attın mı?',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Evet 👍🏻", callback_data: "3"}],
                [{text: "Hayır 👎🏻", callback_data: "4"}]
            ]
        }
    })

})
bot.action('1', (ctx) => {
    ctx.deleteMessage()
    ctx.reply('Güncel basım olan kitapların telif haklarından dolayı pdf/epub formatları bulunmadığı için sana yardımcı olamam maalesef😔')

})
bot.action('4', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, 'Kütüphanelere göz atman için aşağıdaki butonu kullanabilirsin',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Grup Kütüphaneleri", url: "https://telegra.ph/K%C3%9CT%C3%9CPHANELER-03-28"}]
            ]
        }
    })
    
})

bot.action('3', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, "✅ Sorunu Paylaşım Ekibine  ' @paylasimekibi1 ' bildirdim.😊\nAradığın bir kitap ise aşağıdaki ilgili kütüphaneye eklenecek, bu yüzden bildirimlerini açık tutmalısın🔔",
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "📕Roman, Hikaye & Bilim Kitapları📕", url: "https://t.me/joinchat/AAAAAFVkSbJObWQNLfLMAQ"}],
                [{text: "📚Eğitim Kitapları📚", url: "https://t.me/joinchat/AAAAAFOIaTAr4kWJ_SifQg"}],
                [{text: "🔥Çizgi Romanlar🔥", url: "https://t.me/joinchat/AAAAAEUVQ1bImf6DujYnTQ"}]
            ]
        }
    })
})
bot.hears(/varmidır/ig, async (ctx, next) => {
    ctx.telegram.sendMessage(ctx.chat.id, '🧐Aradığın kitap 2019-2020 basım bir kitap mı?',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Evet 👍🏻", callback_data: "1"}],
                [{text: "Hayır 👎🏻", callback_data: "2"}]
            ]
        }
    })
})

bot.action('2', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, '📬 Aradığın kitap grup kütüphalerinde daha önce paylaşılmış olabilir.\nKütüphanelere göz attın mı?',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Evet 👍🏻", callback_data: "3"}],
                [{text: "Hayır 👎🏻", callback_data: "4"}]
            ]
        }
    })

})
bot.action('1', (ctx) => {
    ctx.deleteMessage()
    ctx.reply('Güncel basım olan kitapların telif haklarından dolayı pdf/epub formatları bulunmadığı için sana yardımcı olamam maalesef😔')

})
bot.action('4', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, 'Kütüphanelere göz atman için aşağıdaki butonu kullanabilirsin',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Grup Kütüphaneleri", url: "https://telegra.ph/K%C3%9CT%C3%9CPHANELER-03-28"}]
            ]
        }
    })
    
})

bot.action('3', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, "✅ Sorunu Paylaşım Ekibine  ' @paylasimekibi1 ' bildirdim.😊\nAradığın bir kitap ise aşağıdaki ilgili kütüphaneye eklenecek, bu yüzden bildirimlerini açık tutmalısın🔔",
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "📕Roman, Hikaye & Bilim Kitapları📕", url: "https://t.me/joinchat/AAAAAFVkSbJObWQNLfLMAQ"}],
                [{text: "📚Eğitim Kitapları📚", url: "https://t.me/joinchat/AAAAAFOIaTAr4kWJ_SifQg"}],
                [{text: "🔥Çizgi Romanlar🔥", url: "https://t.me/joinchat/AAAAAEUVQ1bImf6DujYnTQ"}]
            ]
        }
    })
})
bot.hears(/var midır/ig, async (ctx, next) => {
    ctx.telegram.sendMessage(ctx.chat.id, '🧐Aradığın kitap 2019-2020 basım bir kitap mı?',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Evet 👍🏻", callback_data: "1"}],
                [{text: "Hayır 👎🏻", callback_data: "2"}]
            ]
        }
    })
})

bot.action('2', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, '📬 Aradığın kitap grup kütüphalerinde daha önce paylaşılmış olabilir.\nKütüphanelere göz attın mı?',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Evet 👍🏻", callback_data: "3"}],
                [{text: "Hayır 👎🏻", callback_data: "4"}]
            ]
        }
    })

})
bot.action('1', (ctx) => {
    ctx.deleteMessage()
    ctx.reply('Güncel basım olan kitapların telif haklarından dolayı pdf/epub formatları bulunmadığı için sana yardımcı olamam maalesef😔')

})
bot.action('4', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, 'Kütüphanelere göz atman için aşağıdaki butonu kullanabilirsin',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Grup Kütüphaneleri", url: "https://telegra.ph/K%C3%9CT%C3%9CPHANELER-03-28"}]
            ]
        }
    })
    
})

bot.action('3', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, "✅ Sorunu Paylaşım Ekibine  ' @paylasimekibi1 ' bildirdim.😊\nAradığın bir kitap ise aşağıdaki ilgili kütüphaneye eklenecek, bu yüzden bildirimlerini açık tutmalısın🔔",
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "📕Roman, Hikaye & Bilim Kitapları📕", url: "https://t.me/joinchat/AAAAAFVkSbJObWQNLfLMAQ"}],
                [{text: "📚Eğitim Kitapları📚", url: "https://t.me/joinchat/AAAAAFOIaTAr4kWJ_SifQg"}],
                [{text: "🔥Çizgi Romanlar🔥", url: "https://t.me/joinchat/AAAAAEUVQ1bImf6DujYnTQ"}]
            ]
        }
    })
})
bot.hears(/bulunur mu/ig, async (ctx, next) => {
    ctx.telegram.sendMessage(ctx.chat.id, '🧐Aradığın kitap 2019-2020 basım bir kitap mı?',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Evet 👍🏻", callback_data: "1"}],
                [{text: "Hayır 👎🏻", callback_data: "2"}]
            ]
        }
    })
})

bot.action('2', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, '📬 Aradığın kitap grup kütüphalerinde daha önce paylaşılmış olabilir.\nKütüphanelere göz attın mı?',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Evet 👍🏻", callback_data: "3"}],
                [{text: "Hayır 👎🏻", callback_data: "4"}]
            ]
        }
    })

})
bot.action('1', (ctx) => {
    ctx.deleteMessage()
    ctx.reply('Güncel basım olan kitapların telif haklarından dolayı pdf/epub formatları bulunmadığı için sana yardımcı olamam maalesef😔')

})
bot.action('4', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, 'Kütüphanelere göz atman için aşağıdaki butonu kullanabilirsin',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Grup Kütüphaneleri", url: "https://telegra.ph/K%C3%9CT%C3%9CPHANELER-03-28"}]
            ]
        }
    })
    
})

bot.action('3', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, "✅ Sorunu Paylaşım Ekibine  ' @paylasimekibi1 ' bildirdim.😊\nAradığın bir kitap ise aşağıdaki ilgili kütüphaneye eklenecek, bu yüzden bildirimlerini açık tutmalısın🔔",
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "📕Roman, Hikaye & Bilim Kitapları📕", url: "https://t.me/joinchat/AAAAAFVkSbJObWQNLfLMAQ"}],
                [{text: "📚Eğitim Kitapları📚", url: "https://t.me/joinchat/AAAAAFOIaTAr4kWJ_SifQg"}],
                [{text: "🔥Çizgi Romanlar🔥", url: "https://t.me/joinchat/AAAAAEUVQ1bImf6DujYnTQ"}]
            ]
        }
    })
})
bot.hears(/bulunurmu/ig, async (ctx, next) => {
    ctx.telegram.sendMessage(ctx.chat.id, '🧐Aradığın kitap 2019-2020 basım bir kitap mı?',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Evet 👍🏻", callback_data: "1"}],
                [{text: "Hayır 👎🏻", callback_data: "2"}]
            ]
        }
    })
})

bot.action('2', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, '📬 Aradığın kitap grup kütüphalerinde daha önce paylaşılmış olabilir.\nKütüphanelere göz attın mı?',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Evet 👍🏻", callback_data: "3"}],
                [{text: "Hayır 👎🏻", callback_data: "4"}]
            ]
        }
    })

})
bot.action('1', (ctx) => {
    ctx.deleteMessage()
    ctx.reply('Güncel basım olan kitapların telif haklarından dolayı pdf/epub formatları bulunmadığı için sana yardımcı olamam maalesef😔')

})
bot.action('4', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, 'Kütüphanelere göz atman için aşağıdaki butonu kullanabilirsin',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Grup Kütüphaneleri", url: "https://telegra.ph/K%C3%9CT%C3%9CPHANELER-03-28"}]
            ]
        }
    })
    
})

bot.action('3', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, "✅ Sorunu Paylaşım Ekibine  ' @paylasimekibi1 ' bildirdim.😊\nAradığın bir kitap ise aşağıdaki ilgili kütüphaneye eklenecek, bu yüzden bildirimlerini açık tutmalısın🔔",
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "📕Roman, Hikaye & Bilim Kitapları📕", url: "https://t.me/joinchat/AAAAAFVkSbJObWQNLfLMAQ"}],
                [{text: "📚Eğitim Kitapları📚", url: "https://t.me/joinchat/AAAAAFOIaTAr4kWJ_SifQg"}],
                [{text: "🔥Çizgi Romanlar🔥", url: "https://t.me/joinchat/AAAAAEUVQ1bImf6DujYnTQ"}]
            ]
        }
    })
})
bot.hears(/paylaşır mısınız/ig, async (ctx, next) => {
    ctx.telegram.sendMessage(ctx.chat.id, '🧐Aradığın kitap 2019-2020 basım bir kitap mı?',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Evet 👍🏻", callback_data: "1"}],
                [{text: "Hayır 👎🏻", callback_data: "2"}]
            ]
        }
    })
})

bot.action('2', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, '📬 Aradığın kitap grup kütüphalerinde daha önce paylaşılmış olabilir.\nKütüphanelere göz attın mı?',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Evet 👍🏻", callback_data: "3"}],
                [{text: "Hayır 👎🏻", callback_data: "4"}]
            ]
        }
    })

})
bot.action('1', (ctx) => {
    ctx.deleteMessage()
    ctx.reply('Güncel basım olan kitapların telif haklarından dolayı pdf/epub formatları bulunmadığı için sana yardımcı olamam maalesef😔')

})
bot.action('4', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, 'Kütüphanelere göz atman için aşağıdaki butonu kullanabilirsin',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Grup Kütüphaneleri", url: "https://telegra.ph/K%C3%9CT%C3%9CPHANELER-03-28"}]
            ]
        }
    })
    
})

bot.action('3', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, "✅ Sorunu Paylaşım Ekibine  ' @paylasimekibi1 ' bildirdim.😊\nAradığın bir kitap ise aşağıdaki ilgili kütüphaneye eklenecek, bu yüzden bildirimlerini açık tutmalısın🔔",
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "📕Roman, Hikaye & Bilim Kitapları📕", url: "https://t.me/joinchat/AAAAAFVkSbJObWQNLfLMAQ"}],
                [{text: "📚Eğitim Kitapları📚", url: "https://t.me/joinchat/AAAAAFOIaTAr4kWJ_SifQg"}],
                [{text: "🔥Çizgi Romanlar🔥", url: "https://t.me/joinchat/AAAAAEUVQ1bImf6DujYnTQ"}]
            ]
        }
    })
})
bot.hears(/paylaşırmısınız/ig, async (ctx, next) => {
    ctx.telegram.sendMessage(ctx.chat.id, '🧐Aradığın kitap 2019-2020 basım bir kitap mı?',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Evet 👍🏻", callback_data: "1"}],
                [{text: "Hayır 👎🏻", callback_data: "2"}]
            ]
        }
    })
})

bot.action('2', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, '📬 Aradığın kitap grup kütüphalerinde daha önce paylaşılmış olabilir.\nKütüphanelere göz attın mı?',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Evet 👍🏻", callback_data: "3"}],
                [{text: "Hayır 👎🏻", callback_data: "4"}]
            ]
        }
    })

})
bot.action('1', (ctx) => {
    ctx.deleteMessage()
    ctx.reply('Güncel basım olan kitapların telif haklarından dolayı pdf/epub formatları bulunmadığı için sana yardımcı olamam maalesef😔')

})
bot.action('4', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, 'Kütüphanelere göz atman için aşağıdaki butonu kullanabilirsin',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Grup Kütüphaneleri", url: "https://telegra.ph/K%C3%9CT%C3%9CPHANELER-03-28"}]
            ]
        }
    })
    
})

bot.action('3', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, "✅ Sorunu Paylaşım Ekibine  ' @paylasimekibi1 ' bildirdim.😊\nAradığın bir kitap ise aşağıdaki ilgili kütüphaneye eklenecek, bu yüzden bildirimlerini açık tutmalısın🔔",
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "📕Roman, Hikaye & Bilim Kitapları📕", url: "https://t.me/joinchat/AAAAAFVkSbJObWQNLfLMAQ"}],
                [{text: "📚Eğitim Kitapları📚", url: "https://t.me/joinchat/AAAAAFOIaTAr4kWJ_SifQg"}],
                [{text: "🔥Çizgi Romanlar🔥", url: "https://t.me/joinchat/AAAAAEUVQ1bImf6DujYnTQ"}]
            ]
        }
    })
})
bot.hears(/mevcut mu/ig, async (ctx, next) => {
    ctx.telegram.sendMessage(ctx.chat.id, '🧐Aradığın kitap 2019-2020 basım bir kitap mı?',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Evet 👍🏻", callback_data: "1"}],
                [{text: "Hayır 👎🏻", callback_data: "2"}]
            ]
        }
    })
})

bot.action('2', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, '📬 Aradığın kitap grup kütüphalerinde daha önce paylaşılmış olabilir.\nKütüphanelere göz attın mı?',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Evet 👍🏻", callback_data: "3"}],
                [{text: "Hayır 👎🏻", callback_data: "4"}]
            ]
        }
    })

})
bot.action('1', (ctx) => {
    ctx.deleteMessage()
    ctx.reply('Güncel basım olan kitapların telif haklarından dolayı pdf/epub formatları bulunmadığı için sana yardımcı olamam maalesef😔')

})
bot.action('4', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, 'Kütüphanelere göz atman için aşağıdaki butonu kullanabilirsin',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Grup Kütüphaneleri", url: "https://telegra.ph/K%C3%9CT%C3%9CPHANELER-03-28"}]
            ]
        }
    })
    
})

bot.action('3', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, "✅ Sorunu Paylaşım Ekibine  ' @paylasimekibi1 ' bildirdim.😊\nAradığın bir kitap ise aşağıdaki ilgili kütüphaneye eklenecek, bu yüzden bildirimlerini açık tutmalısın🔔",
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "📕Roman, Hikaye & Bilim Kitapları📕", url: "https://t.me/joinchat/AAAAAFVkSbJObWQNLfLMAQ"}],
                [{text: "📚Eğitim Kitapları📚", url: "https://t.me/joinchat/AAAAAFOIaTAr4kWJ_SifQg"}],
                [{text: "🔥Çizgi Romanlar🔥", url: "https://t.me/joinchat/AAAAAEUVQ1bImf6DujYnTQ"}]
            ]
        }
    })
})
bot.hears(/mevcutmu/ig, async (ctx, next) => {
    ctx.telegram.sendMessage(ctx.chat.id, '🧐Aradığın kitap 2019-2020 basım bir kitap mı?',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Evet 👍🏻", callback_data: "1"}],
                [{text: "Hayır 👎🏻", callback_data: "2"}]
            ]
        }
    })
})

bot.action('2', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, '📬 Aradığın kitap grup kütüphalerinde daha önce paylaşılmış olabilir.\nKütüphanelere göz attın mı?',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Evet 👍🏻", callback_data: "3"}],
                [{text: "Hayır 👎🏻", callback_data: "4"}]
            ]
        }
    })

})
bot.action('1', (ctx) => {
    ctx.deleteMessage()
    ctx.reply('Güncel basım olan kitapların telif haklarından dolayı pdf/epub formatları bulunmadığı için sana yardımcı olamam maalesef😔')

})
bot.action('4', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, 'Kütüphanelere göz atman için aşağıdaki butonu kullanabilirsin',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Grup Kütüphaneleri", url: "https://telegra.ph/K%C3%9CT%C3%9CPHANELER-03-28"}]
            ]
        }
    })
    
})

bot.action('3', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, "✅ Sorunu Paylaşım Ekibine  ' @paylasimekibi1 ' bildirdim.😊\nAradığın bir kitap ise aşağıdaki ilgili kütüphaneye eklenecek, bu yüzden bildirimlerini açık tutmalısın🔔",
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "📕Roman, Hikaye & Bilim Kitapları📕", url: "https://t.me/joinchat/AAAAAFVkSbJObWQNLfLMAQ"}],
                [{text: "📚Eğitim Kitapları📚", url: "https://t.me/joinchat/AAAAAFOIaTAr4kWJ_SifQg"}],
                [{text: "🔥Çizgi Romanlar🔥", url: "https://t.me/joinchat/AAAAAEUVQ1bImf6DujYnTQ"}]
            ]
        }
    })
})
bot.hears(/bulabilirmiyiz/ig, async (ctx, next) => {
    ctx.telegram.sendMessage(ctx.chat.id, '🧐Aradığın kitap 2019-2020 basım bir kitap mı?',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Evet 👍🏻", callback_data: "1"}],
                [{text: "Hayır 👎🏻", callback_data: "2"}]
            ]
        }
    })
})

bot.action('2', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, '📬 Aradığın kitap grup kütüphalerinde daha önce paylaşılmış olabilir.\nKütüphanelere göz attın mı?',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Evet 👍🏻", callback_data: "3"}],
                [{text: "Hayır 👎🏻", callback_data: "4"}]
            ]
        }
    })

})
bot.action('1', (ctx) => {
    ctx.deleteMessage()
    ctx.reply('Güncel basım olan kitapların telif haklarından dolayı pdf/epub formatları bulunmadığı için sana yardımcı olamam maalesef😔')

})
bot.action('4', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, 'Kütüphanelere göz atman için aşağıdaki butonu kullanabilirsin',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Grup Kütüphaneleri", url: "https://telegra.ph/K%C3%9CT%C3%9CPHANELER-03-28"}]
            ]
        }
    })
    
})

bot.action('3', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, "✅ Sorunu Paylaşım Ekibine  ' @paylasimekibi1 ' bildirdim.😊\nAradığın bir kitap ise aşağıdaki ilgili kütüphaneye eklenecek, bu yüzden bildirimlerini açık tutmalısın🔔",
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "📕Roman, Hikaye & Bilim Kitapları📕", url: "https://t.me/joinchat/AAAAAFVkSbJObWQNLfLMAQ"}],
                [{text: "📚Eğitim Kitapları📚", url: "https://t.me/joinchat/AAAAAFOIaTAr4kWJ_SifQg"}],
                [{text: "🔥Çizgi Romanlar🔥", url: "https://t.me/joinchat/AAAAAEUVQ1bImf6DujYnTQ"}]
            ]
        }
    })
})
bot.hears(/bulabilir miyiz/ig, async (ctx, next) => {
    ctx.telegram.sendMessage(ctx.chat.id, '🧐Aradığın kitap 2019-2020 basım bir kitap mı?',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Evet 👍🏻", callback_data: "1"}],
                [{text: "Hayır 👎🏻", callback_data: "2"}]
            ]
        }
    })
})

bot.action('2', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, '📬 Aradığın kitap grup kütüphalerinde daha önce paylaşılmış olabilir.\nKütüphanelere göz attın mı?',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Evet 👍🏻", callback_data: "3"}],
                [{text: "Hayır 👎🏻", callback_data: "4"}]
            ]
        }
    })

})
bot.action('1', (ctx) => {
    ctx.deleteMessage()
    ctx.reply('Güncel basım olan kitapların telif haklarından dolayı pdf/epub formatları bulunmadığı için sana yardımcı olamam maalesef😔')

})
bot.action('4', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, 'Kütüphanelere göz atman için aşağıdaki butonu kullanabilirsin',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Grup Kütüphaneleri", url: "https://telegra.ph/K%C3%9CT%C3%9CPHANELER-03-28"}]
            ]
        }
    })
    
})

bot.action('3', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, "✅ Sorunu Paylaşım Ekibine  ' @paylasimekibi1 ' bildirdim.😊\nAradığın bir kitap ise aşağıdaki ilgili kütüphaneye eklenecek, bu yüzden bildirimlerini açık tutmalısın🔔",
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "📕Roman, Hikaye & Bilim Kitapları📕", url: "https://t.me/joinchat/AAAAAFVkSbJObWQNLfLMAQ"}],
                [{text: "📚Eğitim Kitapları📚", url: "https://t.me/joinchat/AAAAAFOIaTAr4kWJ_SifQg"}],
                [{text: "🔥Çizgi Romanlar🔥", url: "https://t.me/joinchat/AAAAAEUVQ1bImf6DujYnTQ"}]
            ]
        }
    })
})
bot.hears(/atarmısınız/ig, async (ctx, next) => {
    ctx.telegram.sendMessage(ctx.chat.id, '🧐Aradığın kitap 2019-2020 basım bir kitap mı?',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Evet 👍🏻", callback_data: "1"}],
                [{text: "Hayır 👎🏻", callback_data: "2"}]
            ]
        }
    })
})

bot.action('2', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, '📬 Aradığın kitap grup kütüphalerinde daha önce paylaşılmış olabilir.\nKütüphanelere göz attın mı?',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Evet 👍🏻", callback_data: "3"}],
                [{text: "Hayır 👎🏻", callback_data: "4"}]
            ]
        }
    })

})
bot.action('1', (ctx) => {
    ctx.deleteMessage()
    ctx.reply('Güncel basım olan kitapların telif haklarından dolayı pdf/epub formatları bulunmadığı için sana yardımcı olamam maalesef😔')

})
bot.action('4', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, 'Kütüphanelere göz atman için aşağıdaki butonu kullanabilirsin',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Grup Kütüphaneleri", url: "https://telegra.ph/K%C3%9CT%C3%9CPHANELER-03-28"}]
            ]
        }
    })
    
})

bot.action('3', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, "✅ Sorunu Paylaşım Ekibine  ' @paylasimekibi1 ' bildirdim.😊\nAradığın bir kitap ise aşağıdaki ilgili kütüphaneye eklenecek, bu yüzden bildirimlerini açık tutmalısın🔔",
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "📕Roman, Hikaye & Bilim Kitapları📕", url: "https://t.me/joinchat/AAAAAFVkSbJObWQNLfLMAQ"}],
                [{text: "📚Eğitim Kitapları📚", url: "https://t.me/joinchat/AAAAAFOIaTAr4kWJ_SifQg"}],
                [{text: "🔥Çizgi Romanlar🔥", url: "https://t.me/joinchat/AAAAAEUVQ1bImf6DujYnTQ"}]
            ]
        }
    })
})
bot.hears(/atar mısınız/ig, async (ctx, next) => {
    ctx.telegram.sendMessage(ctx.chat.id, '🧐Aradığın kitap 2019-2020 basım bir kitap mı?',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Evet 👍🏻", callback_data: "1"}],
                [{text: "Hayır 👎🏻", callback_data: "2"}]
            ]
        }
    })
})

bot.action('2', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, '📬 Aradığın kitap grup kütüphalerinde daha önce paylaşılmış olabilir.\nKütüphanelere göz attın mı?',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Evet 👍🏻", callback_data: "3"}],
                [{text: "Hayır 👎🏻", callback_data: "4"}]
            ]
        }
    })

})
bot.action('1', (ctx) => {
    ctx.deleteMessage()
    ctx.reply('Güncel basım olan kitapların telif haklarından dolayı pdf/epub formatları bulunmadığı için sana yardımcı olamam maalesef😔')

})
bot.action('4', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, 'Kütüphanelere göz atman için aşağıdaki butonu kullanabilirsin',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Grup Kütüphaneleri", url: "https://telegra.ph/K%C3%9CT%C3%9CPHANELER-03-28"}]
            ]
        }
    })
    
})

bot.action('3', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, "✅ Sorunu Paylaşım Ekibine  ' @paylasimekibi1 ' bildirdim.😊\nAradığın bir kitap ise aşağıdaki ilgili kütüphaneye eklenecek, bu yüzden bildirimlerini açık tutmalısın🔔",
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "📕Roman, Hikaye & Bilim Kitapları📕", url: "https://t.me/joinchat/AAAAAFVkSbJObWQNLfLMAQ"}],
                [{text: "📚Eğitim Kitapları📚", url: "https://t.me/joinchat/AAAAAFOIaTAr4kWJ_SifQg"}],
                [{text: "🔥Çizgi Romanlar🔥", url: "https://t.me/joinchat/AAAAAEUVQ1bImf6DujYnTQ"}]
            ]
        }
    })
})
bot.hears(/atar mısınız/ig, async (ctx, next) => {
    ctx.telegram.sendMessage(ctx.chat.id, '🧐Aradığın kitap 2019-2020 basım bir kitap mı?',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Evet 👍🏻", callback_data: "1"}],
                [{text: "Hayır 👎🏻", callback_data: "2"}]
            ]
        }
    })
})

bot.action('2', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, '📬 Aradığın kitap grup kütüphalerinde daha önce paylaşılmış olabilir.\nKütüphanelere göz attın mı?',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Evet 👍🏻", callback_data: "3"}],
                [{text: "Hayır 👎🏻", callback_data: "4"}]
            ]
        }
    })

})
bot.action('1', (ctx) => {
    ctx.deleteMessage()
    ctx.reply('Güncel basım olan kitapların telif haklarından dolayı pdf/epub formatları bulunmadığı için sana yardımcı olamam maalesef😔')

})
bot.action('4', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, 'Kütüphanelere göz atman için aşağıdaki butonu kullanabilirsin',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Grup Kütüphaneleri", url: "https://telegra.ph/K%C3%9CT%C3%9CPHANELER-03-28"}]
            ]
        }
    })
    
})

bot.action('3', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, "✅ Sorunu Paylaşım Ekibine  ' @paylasimekibi1 ' bildirdim.😊\nAradığın bir kitap ise aşağıdaki ilgili kütüphaneye eklenecek, bu yüzden bildirimlerini açık tutmalısın🔔",
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "📕Roman, Hikaye & Bilim Kitapları📕", url: "https://t.me/joinchat/AAAAAFVkSbJObWQNLfLMAQ"}],
                [{text: "📚Eğitim Kitapları📚", url: "https://t.me/joinchat/AAAAAFOIaTAr4kWJ_SifQg"}],
                [{text: "🔥Çizgi Romanlar🔥", url: "https://t.me/joinchat/AAAAAEUVQ1bImf6DujYnTQ"}]
            ]
        }
    })
})
bot.hears(/bulunur mu/ig, async (ctx, next) => {
    ctx.telegram.sendMessage(ctx.chat.id, '🧐Aradığın kitap 2019-2020 basım bir kitap mı?',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Evet 👍🏻", callback_data: "1"}],
                [{text: "Hayır 👎🏻", callback_data: "2"}]
            ]
        }
    })
})

bot.action('2', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, '📬 Aradığın kitap grup kütüphalerinde daha önce paylaşılmış olabilir.\nKütüphanelere göz attın mı?',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Evet 👍🏻", callback_data: "3"}],
                [{text: "Hayır 👎🏻", callback_data: "4"}]
            ]
        }
    })

})
bot.action('1', (ctx) => {
    ctx.deleteMessage()
    ctx.reply('Güncel basım olan kitapların telif haklarından dolayı pdf/epub formatları bulunmadığı için sana yardımcı olamam maalesef😔')

})
bot.action('4', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, 'Kütüphanelere göz atman için aşağıdaki butonu kullanabilirsin',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Grup Kütüphaneleri", url: "https://telegra.ph/K%C3%9CT%C3%9CPHANELER-03-28"}]
            ]
        }
    })
    
})

bot.action('3', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, "✅ Sorunu Paylaşım Ekibine  ' @paylasimekibi1 ' bildirdim.😊\nAradığın bir kitap ise aşağıdaki ilgili kütüphaneye eklenecek, bu yüzden bildirimlerini açık tutmalısın🔔",
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "📕Roman, Hikaye & Bilim Kitapları📕", url: "https://t.me/joinchat/AAAAAFVkSbJObWQNLfLMAQ"}],
                [{text: "📚Eğitim Kitapları📚", url: "https://t.me/joinchat/AAAAAFOIaTAr4kWJ_SifQg"}],
                [{text: "🔥Çizgi Romanlar🔥", url: "https://t.me/joinchat/AAAAAEUVQ1bImf6DujYnTQ"}]
            ]
        }
    })
})
bot.hears(/bulunurmu/ig, async (ctx, next) => {
    ctx.telegram.sendMessage(ctx.chat.id, '🧐Aradığın kitap 2019-2020 basım bir kitap mı?',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Evet 👍🏻", callback_data: "1"}],
                [{text: "Hayır 👎🏻", callback_data: "2"}]
            ]
        }
    })
})

bot.action('2', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, '📬 Aradığın kitap grup kütüphalerinde daha önce paylaşılmış olabilir.\nKütüphanelere göz attın mı?',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Evet 👍🏻", callback_data: "3"}],
                [{text: "Hayır 👎🏻", callback_data: "4"}]
            ]
        }
    })

})
bot.action('1', (ctx) => {
    ctx.deleteMessage()
    ctx.reply('Güncel basım olan kitapların telif haklarından dolayı pdf/epub formatları bulunmadığı için sana yardımcı olamam maalesef😔')

})
bot.action('4', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, 'Kütüphanelere göz atman için aşağıdaki butonu kullanabilirsin',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Grup Kütüphaneleri", url: "https://telegra.ph/K%C3%9CT%C3%9CPHANELER-03-28"}]
            ]
        }
    })
    
})

bot.action('3', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, "✅ Sorunu Paylaşım Ekibine  ' @paylasimekibi1 ' bildirdim.😊\nAradığın bir kitap ise aşağıdaki ilgili kütüphaneye eklenecek, bu yüzden bildirimlerini açık tutmalısın🔔",
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "📕Roman, Hikaye & Bilim Kitapları📕", url: "https://t.me/joinchat/AAAAAFVkSbJObWQNLfLMAQ"}],
                [{text: "📚Eğitim Kitapları📚", url: "https://t.me/joinchat/AAAAAFOIaTAr4kWJ_SifQg"}],
                [{text: "🔥Çizgi Romanlar🔥", url: "https://t.me/joinchat/AAAAAEUVQ1bImf6DujYnTQ"}]
            ]
        }
    })
})

module.exports = bot
