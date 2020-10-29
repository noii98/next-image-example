import styles from '../styles.module.css'
import Image from 'next/image'

const Code = (p) => <code className={styles.inlineCode} {...p} />

const Index = () => (
  <div className={styles.container}>
    <div className={styles.card}>
      <h1>Image Component with Next.js</h1>
      <p>
        The images below use the{' '}
        <a href="https://nextjs.org/docs/api-reference/next/image">
          &lt;Image&gt;
        </a>{' '}
        component to ensure optimal format and size for this browser.
      </p>
      <p>
        Images are also lazy loaded by default which means they don't load until
        scrolled into view.
      </p>
      <p>Try scolling down to try it out!</p>
      <hr className={styles.hr} />
      <p>
        The following is an example of a reference to an interal image from the{' '}
        <Code>public</Code> directory.
      </p>
      <p>
        Notice that the image is responsive. As you adjust your browser width, a
        different sized image is loaded.
      </p>
      <Image alt="Vercel logo" src="/vercel.png" width={1000} height={1000} />
      <hr className={styles.hr} />
      <p>
        The following is an example of a reference to an external image at{' '}
        <Code>assets.vercel.com</Code>.
      </p>
      <p>
        External domains must be configured in <Code>next.config.js</Code> using
        the <Code>domains</Code>.
      </p>
      <Image
        alt="dato test"
        src="https://www.datocms-assets.com/36795/1585207275-image-33-copyright.jpg"
        width={1920}
        height={1080}
      />
      <hr className={styles.hr} />
      Checkout the documentation for{' '}
      <a href="https://nextjs.org/docs/basic-features/image-optimization">
        Image Optimization
      </a>{' '}
      to learn more.
    </div>
  </div>
)

export default Index
