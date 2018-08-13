import * as tf from '@tensorflow/tfjs-core'

declare const window: any

window.run = async function(iterations: number, maxTensorSize: number) {
  for (let i = 0; i < iterations; i++) {
    const height = Math.floor(Math.random() * maxTensorSize)
    const width = Math.floor(Math.random() * maxTensorSize)

    console.log(height, width)

    const t1 = tf.ones([height, width])
    const t2 = tf.ones([height, width])

    // do something
    const sum = t1.add(t2)

    t1.dispose()
    t2.dispose()
    sum.dispose()

    await tf.nextFrame()

    console.log(tf.memory())
  }
}