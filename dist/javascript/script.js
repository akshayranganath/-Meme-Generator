function generateImageOverlay (publicId, message) {
  publicId = 'subhashitaani/sky-space-dark-galaxy'
  message = 'उद्यमेन हि सिध्यन्ति कार्याणि न मनोरथैः|\nन हि सुप्तस्य सिंहस्य प्रविशन्ति मुखे मृगाः||'
  message = encodeURIComponent(message)
  const base = 'https://res.cloudinary.com/dbmataac4/image/upload/w_1024,h_768/'
  const themes = [
      `l_text:Mukta_60:${message}`,
      `co_rgb:FFFF00,l_text:Mukta_60:${message}`,
      `co_rgb:00FF00,l_text:Mukta_60:${message}`,
      `co_rgb:0000FF,l_text:Mukta_60:${message}`
  ]

  const linkParent = document.getElementById('links')
  linkParent.style = 'display:block'

  for (let i = 0; i < themes.length; i++) {
    const url = `${base}${themes[i]},f_auto,q_auto,e_sharpen/${publicId}`
    const element = document.getElementById(`preview${i}`)
    const image = document.createElement('img')
    image.src = url
    image.width = '250'
    image.height = '250'
    element.appendChild(image)

    // create a <a href>
    const ahref = document.createElement('a')
    ahref.href = url
    ahref.text = 'Link'

    const para = document.createElement('p')
    para.appendChild(ahref)

    const div = document.createElement('div')
    div.className = 'three columns'
    div.appendChild(para)

    linkParent.appendChild(div)
  }

  // finall display the div
  const previewDiv = document.getElementById('preview')
  previewDiv.style.display = 'block'
}
