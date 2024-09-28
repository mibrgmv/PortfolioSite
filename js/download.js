function downloadCV() {
    const a = document.createElement('a')
    a.href = "resume.pdf"
    a.download = "resume.pdf"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}