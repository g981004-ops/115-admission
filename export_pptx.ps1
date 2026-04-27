$pptxPath = "d:\CCCowork\115-admission\assets\floor-plan\floor_plan.pptx"
$outDir = "d:\CCCowork\115-admission\assets\floor-plan\exported"

New-Item -ItemType Directory -Force -Path $outDir | Out-Null

$ppt = New-Object -ComObject PowerPoint.Application

$pres = $ppt.Presentations.Open($pptxPath)

for ($i = 1; $i -le $pres.Slides.Count; $i++) {
    $slidePath = Join-Path $outDir "slide_$i.png"
    $pres.Slides.Item($i).Export($slidePath, "PNG", 1920, 1080)
    Write-Host "Exported slide $i to $slidePath"
}

$pres.Close()
$ppt.Quit()

Write-Host "Done exporting all slides."
