import fs from 'fs'
import path from 'path'

export function getImagesFromDirectory(directory: string): string[] {
  try {
    const dirPath = path.join(process.cwd(), 'public', directory)
    if (!fs.existsSync(dirPath)) return []
    const files = fs.readdirSync(dirPath)
    return files
      .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
      .map(file => `/${directory}/${encodeURIComponent(file)}`)
  } catch (error) {
    console.error(`Error reading directory ${directory}:`, error)
    return []
  }
}

export function getVideosFromDirectory(directory: string): string[] {
  try {
    const dirPath = path.join(process.cwd(), 'public', directory)
    if (!fs.existsSync(dirPath)) return []
    const files = fs.readdirSync(dirPath)
    return files
      .filter(file => /\.(mp4|webm|ogg)$/i.test(file))
      .map(file => `/${directory}/${encodeURIComponent(file)}`)
  } catch (error) {
    console.error(`Error reading directory ${directory}:`, error)
    return []
  }
}
