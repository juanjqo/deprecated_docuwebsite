import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Juan J. Quiroz O.',
    Svg: require('@site/static/img/photo_3.svg').default,
    description: (
      <>
        I'm a robotics researcher at The University of Tokyo.
      </>
    ),
  },
  {
    title: 'Research Interests',
    Svg: require('@site/static/img/MobileManipulator.svg').default,
    description: (
      <>
        My research interests focus on modeling and control of constrained redundant robots, 
        as mobile manipulators, humanoid robots and surgical robots.
      </>
    ),
  },
  {
    title: 'Current Research',
    Svg: require('@site/static/img/MedicalRobot.svg').default,
    description: (
      <>
        Currently, I am working on constrained control strategies for
        surgical robots exploiting the robot dynamics.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
