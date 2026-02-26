# Script para convertir videos MP4 a WebM usando FFmpeg
# Asegúrate de tener FFmpeg instalado antes de ejecutar este script.

$SourceDir = ".\public\videos"

# Verifica si ffmpeg está instalado
if (-Not (Get-Command "ffmpeg" -ErrorAction SilentlyContinue)) {
    Write-Host "Error: FFmpeg no está instalado en tu sistema." -ForegroundColor Red
    Write-Host "Puedes instalarlo fácilmente usando scoop o winget:" -ForegroundColor Yellow
    Write-Host "  winget install ffmpeg"
    exit
}

# Obtiene todos los archivos .mp4 del directorio
$videos = Get-ChildItem -Path $SourceDir -Filter *.mp4

if ($videos.Count -eq 0) {
    Write-Host "No se encontraron videos MP4 en $SourceDir" -ForegroundColor Yellow
    exit
}

Write-Host "Comenzando la conversión de $($videos.Count) videos a formato WebM para optimización WEB..." -ForegroundColor Cyan
Write-Host "Nota: La compresión con VP9 puede tomar un tiempo dependiendo de la duración de los videos.`n" -ForegroundColor Yellow

foreach ($video in $videos) {
    $inputFile = $video.FullName
    $outputFile = [System.IO.Path]::ChangeExtension($inputFile, ".webm")
    
    # Si el archivo webm ya existe, se lo salta
    if (Test-Path $outputFile) {
        Write-Host "El archivo $([System.IO.Path]::GetFileName($outputFile)) ya existe. Saltando..." -ForegroundColor DarkGray
        continue
    }

    Write-Host "Convirtiendo: $($video.Name) -> $([System.IO.Path]::GetFileName($outputFile))" -ForegroundColor Cyan
    
    # Comando FFmpeg para convertir a WebM (Codec VP9 para video y Opus para audio, altamente optimizado para web)
    # -crf 30 y -b:v 0 es el estándar recomendado para mantener calidad y reducir peso en VP9
    ffmpeg -i "$inputFile" -c:v libvpx-vp9 -crf 30 -b:v 0 -b:a 128k -c:a libopus -vf scale=-2:1080 "$outputFile"
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "  -> ¡Conversión de $($video.Name) completada!" -ForegroundColor Green
    } else {
        Write-Host "  -> Error al convertir $($video.Name)." -ForegroundColor Red
    }
}

Write-Host "`n¡Todas las conversiones han finalizado!" -ForegroundColor Green
Write-Host "Recuerda actualizar los archivos .tsx para que usen la extensión .webm en lugar de .mp4." -ForegroundColor Cyan
