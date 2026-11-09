// Prints, as JSON, the opaque footprint of each PNG given on the command line: the
// smallest rectangle holding every pixel whose alpha is above 16/255, with the origin at
// the top left, plus the picture's size. The app places a prop by this footprint rather
// than by its picture (see Image+Prop.swift in the app), so the website must too.
//
//   xcrun swiftc -O footprints.swift -o footprints && ./footprints a.png b.png > footprints.json
import Foundation
import CoreGraphics
import ImageIO

var out: [String: Any] = [:]
for path in CommandLine.arguments.dropFirst() {
    let url = URL(fileURLWithPath: path)
    guard let source = CGImageSourceCreateWithURL(url as CFURL, nil),
          let image = CGImageSourceCreateImageAtIndex(source, 0, nil) else {
        FileHandle.standardError.write("cannot read \(path)\n".data(using: .utf8)!)
        exit(1)
    }
    let width = image.width, height = image.height
    var alpha = [UInt8](repeating: 0, count: width * height)
    let context = CGContext(data: &alpha, width: width, height: height, bitsPerComponent: 8, bytesPerRow: width,
                            space: CGColorSpaceCreateDeviceGray(), bitmapInfo: CGImageAlphaInfo.alphaOnly.rawValue)!
    context.draw(image, in: CGRect(x: 0, y: 0, width: width, height: height))
    var minX = width, maxX = -1, minY = height, maxY = -1
    for y in 0..<height {
        for x in 0..<width where alpha[y * width + x] > 16 {
            if x < minX { minX = x }
            if x > maxX { maxX = x }
            if y < minY { minY = y }
            if y > maxY { maxY = y }
        }
    }
    let name = url.deletingPathExtension().lastPathComponent
    if maxX < 0 {
        out[name] = ["size": [width, height], "footprint": [0, 0, width, height]]
    } else {
        // CoreGraphics draws bottom-up into the bitmap, so flip the rows to top-left origin.
        let top = height - 1 - maxY, bottom = height - 1 - minY
        out[name] = ["size": [width, height], "footprint": [minX, top, maxX - minX + 1, bottom - top + 1]]
    }
}
let data = try! JSONSerialization.data(withJSONObject: out, options: [.sortedKeys, .prettyPrinted])
print(String(data: data, encoding: .utf8)!)
