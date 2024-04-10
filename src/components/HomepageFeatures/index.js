import clsx from 'clsx'
import Heading from '@theme/Heading'
import styles from './styles.module.css'

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/Technaid-brazo-600x510.svg').default,
    description: (
      <>
        The Electrical stimulator was designed from the ground up to be easily
        installed and used to work with devices like{' '}
        <a href='https://www.technaid.com/products/robotic-exoskeleton-exo-exoesqueleto-h3/'>
          exoh3
        </a>{' '}
        or ReAnkle together.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/Functional_Electrical_Stimulation_.svg')
      .default,
    description: (
      <>
        Parameters like amplitude, period, frequency, repetitions, even symmetric stimulation can be configurate into each channel individually to improve a true personal stimulation.
      </>
    ),
  },
  {
    title: '1, 2, 3, or 4 channels',
    Svg: require('@site/static/img/Functional_Electrical_Stimulation_Therapy.svg')
      .default,
    description: (
      <>
        Extend or customize your stimulation by setting the channels available to each test. This design can
        be extended while reusing the same configuration and parameters.
      </>
    ),
  },
]

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className='text--center'>
        <Svg className={styles.featureSvg} role='img' />
      </div>
      <div className='text--center padding-horiz--md'>
        <Heading as='h3'>{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
