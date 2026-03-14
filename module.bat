@echo off
chcp 65001 >nul
title Lasher Tools - Modul Kurulumu
color 0b
cls
echo.
echo  =============================================================
echo        Lasher Tools - Gerekli Moduller Kuruluyor...
echo  =============================================================
echo.
echo [*] package.json uzerinden tum altyapi paketleri indiriliyor...
call npm install
echo.
echo [*] Guncel Discord Selfbot (v13) api entegrasyonu yukleniyor...
call npm install discord.js-selfbot-v13@latest
echo.
echo [*] Sese Katilma (@discordjs/voice) ve Web istek (axios) paketleri yukleniyor...
call npm install @discordjs/voice axios
echo.
echo  =============================================================
echo       Tum kurulumlar basariyla tamamlandi! (Hata vermediyse)
echo       Artik "start.bat" dosyasini acarak araci baslatabilirsiniz.
echo  =============================================================
echo.
pause