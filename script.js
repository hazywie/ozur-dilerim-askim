document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");

  let yesBtnFontSize = 1.4; // Başlangıç font boyutu (em cinsinden)
  let yesBtnPaddingX = 35; // Başlangıç yatay padding
  let yesBtnPaddingY = 15; // Başlangıç dikey padding

  // Başlangıç stillerini uygula
  yesBtn.style.fontSize = `${yesBtnFontSize}em`;
  yesBtn.style.padding = `${yesBtnPaddingY}px ${yesBtnPaddingX}px`;

  noBtn.addEventListener("click", () => {
    // Evet butonunu büyüt
    yesBtnFontSize += 0.2; // Her tıklamada 0.2em büyüt
    yesBtnPaddingX += 5; // Her tıklamada yatay paddingi artır
    yesBtnPaddingY += 3; // Her tıklamada dikey paddingi artır

    yesBtn.style.fontSize = `${yesBtnFontSize}em`;
    yesBtn.style.padding = `${yesBtnPaddingY}px ${yesBtnPaddingX}px`;

    // "Hayır" butonunun metnini değiştir (opsiyonel)
    const noMessages = [
      "AŞKIM LÜTFEN NE HAYIRI YA",
      "askim emin miyiz?????",
      "Bak büyüyorum good boy kocaman oluyooo",
      "Ama ama ama yapmayapma seviyorum seni",
      "gercekten mi askim?",
      "hala mi hayir mommy:(",
      "bak aglarim uslu olmam",
      "bak cok aglarim birakma",
      "amaaaaaaaaa",
      "askim bak emin misinnnnnnn",
      "bence degilsinnn",
      "AMA YANİ OLMUYO Kİ BÖYLE",
      "Mommy Lütfen:(",
      "askim daha ne kadar dayanican?",
      "pes etmem ki ",
      "NE DEMEK SENİ MOMMYSİZ BIRAKICAM",
      "Aşkım ciddi misin?",
      "OF ÖZLEDİMUA KKKIRMA BENİ",
    ];
    // Rastgele bir mesaj seç
    noBtn.textContent =
      noMessages[Math.floor(Math.random() * noMessages.length)];

    // "Hayır" butonunun boyutunu küçült (opsiyonel, denenebilir)
    // noBtn.style.fontSize = '0.8em';
    // noBtn.style.padding = '8px 18px';
  });

  yesBtn.addEventListener("click", () => {
    // "Evet" butonuna basıldığında ne olacağını buraya yaz.
    // Örneğin, bir mesaj gösterebilir veya başka bir sayfaya yönlendirebilirsin.
    alert("Yaşasın! Seni Seviyorum! ❤️");
    // Veya başka bir sayfaya yönlendir:
    // window.location.href = "tesekkurler.html";
  });
});
