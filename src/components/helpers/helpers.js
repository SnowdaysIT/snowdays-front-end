export function BackgroundSizeHelper(bgImage){
  bgImage.ratio = bgImage.width / bgImage.height

  let pageWidth = document.documentElement.clientWidth
  let pageHeight = document.documentElement.clientHeight
  let pageRatio = pageWidth/pageHeight

  if(pageRatio > bgImage.ratio){
    return '100vw auto'
  } else {
    return 'auto 100vh'
  } 
}

export function BackgroundOffsetHelper(yReference){
  return (
    yReference +" -" + (window.pageYOffset / 12) + "px"
  )
}