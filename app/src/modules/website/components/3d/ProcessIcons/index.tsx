import { useRef, useEffect, useContext } from 'react'
import { useThree } from '@react-three/fiber'
import TimeLineContext from '@/modules/website/contexts/TimelineProcessesContext'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import AWSLogoModel from '../models/AWSLogoModel'
import DjangoLogoModel from '../models/DjangoLogoModel'
import FastLogoModel from '../models/FastLogoModel'
import FigmaLogoModel from '../models/FigmaLogoModel'
import PythonLogoModel from '../models/PythonLogoModel'
import ReactLogoModel from '../models/ReactLogoModel'
import SearchIconModel from '../models/SearchIconModel'
import QuestionIconModel from '../models/QuestionIconModel'
import GearIconModel from '../models/GearIconModel'
import UxIconModel from '../models/UxIconModel'
import UiIconModel from '../models/UiIconModel'
import CloudIconModel from '../models/CloudIconModel'
import DownloadIconModel from '../models/DownloadIconModel'
import BarsIconModel from '../models/BarsIconModel'
import KerasLogoModel from '../models/KerasLogoModel'
import processesData from '@/modules/website/utils/processesData'

gsap.registerPlugin(ScrollTrigger)

const ProcessIcons = () => {
  const viewport = useThree((state) => state.viewport)
  const camera = useThree((state) => state.camera)
  const { width } = viewport.getCurrentViewport(camera, [
    camera.position.x,
    camera.position.y,
    0
  ])

  const { timeline, animationSlideDuration, animationEndDuration } =
    useContext(TimeLineContext)

  const responsiveCondition = width < 9.3
  const proportionalScale = responsiveCondition ? 0.6 : 1
  const positionX = responsiveCondition ? 0 : width / 6.5
  const positionElements = [
    [positionX, responsiveCondition ? 0.75 : 0, 0],
    [positionX - 0.7, -1.2, 0],
    [positionX + 0.7, -1.2, 0]
  ] as any
  const rotation = [0, responsiveCondition ? 0 : -Math.PI / 4, 0] as any

  const modelsGroup = useRef()
  const firstProcessModelOne = useRef()
  const firstProcessModelTwo = useRef()
  const firstProcessModelThree = useRef()
  const secondProcessModelOne = useRef()
  const secondProcessModelTwo = useRef()
  const secondProcessModelThree = useRef()
  const thirdProcessModelOne = useRef()
  const thirdProcessModelTwo = useRef()
  const thirdProcessModelThree = useRef()
  const fourthProcessModelOne = useRef()
  const fourthProcessModelTwo = useRef()
  const fourthProcessModelThree = useRef()
  const fifthProcessModelOne = useRef()
  const fifthProcessModelTwo = useRef()
  const fifthProcessModelThree = useRef()

  const modelsByProcesses = [
    [
      {
        component: SearchIconModel,
        ref: firstProcessModelOne,
        key: 'firstProcessModelOne'
      },
      {
        component: QuestionIconModel,
        ref: firstProcessModelTwo,
        key: 'firstProcessModelTwo'
      },
      {
        component: GearIconModel,
        ref: firstProcessModelThree,
        key: 'firstProcessModelThree'
      }
    ],
    [
      {
        component: UxIconModel,
        ref: secondProcessModelOne,
        key: 'secondProcessModelOne'
      },
      {
        component: FigmaLogoModel,
        ref: secondProcessModelTwo,
        key: 'secondProcessModelTwo'
      },
      {
        component: UiIconModel,
        ref: secondProcessModelThree,
        key: 'secondProcessModelThree'
      }
    ],
    [
      {
        component: CloudIconModel,
        ref: thirdProcessModelOne,
        key: 'thirdProcessModelOne'
      },
      {
        component: DownloadIconModel,
        ref: thirdProcessModelTwo,
        key: 'thirdProcessModelTwo'
      },
      {
        component: FastLogoModel,
        ref: thirdProcessModelThree,
        key: 'thirdProcessModelThree'
      }
    ],
    [
      {
        component: PythonLogoModel,
        ref: fourthProcessModelOne,
        key: 'fourthProcessModelOne'
      },
      {
        component: BarsIconModel,
        ref: fourthProcessModelTwo,
        key: 'fourthProcessModelTwo'
      },
      {
        component: KerasLogoModel,
        ref: fourthProcessModelThree,
        key: 'fourthProcessModelThree'
      }
    ],
    [
      {
        component: ReactLogoModel,
        ref: fifthProcessModelOne,
        key: 'fifthProcessModelOne'
      },
      {
        component: DjangoLogoModel,
        ref: fifthProcessModelTwo,
        key: 'fifthProcessModelTwo'
      },
      {
        component: AWSLogoModel,
        ref: fifthProcessModelThree,
        key: 'fifthProcessModelThree'
      }
    ]
  ]

  useEffect(() => {
    processesData.forEach((process, index) => {
      timeline.current.add(
        gsap.from(
          [
            modelsByProcesses[index][0].ref.current.position,
            modelsByProcesses[index][1].ref.current.position,
            modelsByProcesses[index][2].ref.current.position
          ],
          {
            y: '-=1',
            duration: 0.7,
            stagger: 0.05,
            ease: 'Power3.inOut'
          }
        ),
        // there is a problem with gsap labels
        animationSlideDuration(index)
      )
      timeline.current.add(
        gsap.from(
          [
            modelsByProcesses[index][0].ref.current.scale,
            modelsByProcesses[index][1].ref.current.scale,
            modelsByProcesses[index][2].ref.current.scale
          ],
          {
            x: 0,
            y: 0,
            z: 0,
            duration: 0.7,
            stagger: 0.05,
            ease: 'Power3.inOut'
          }
        ),
        // there is a problem with gsap labels
        animationSlideDuration(index)
      )
      timeline.current.add(
        gsap.to(
          [
            modelsByProcesses[index][0].ref.current.position,
            modelsByProcesses[index][1].ref.current.position,
            modelsByProcesses[index][2].ref.current.position
          ],
          {
            y: '+=1',
            stagger: 0.05,
            ease: 'Power1.easeInOut'
          }
        ),
        // there is a problem with gsap labels
        animationEndDuration(index)
      )
      timeline.current.add(
        gsap.to(
          [
            modelsByProcesses[index][0].ref.current.scale,
            modelsByProcesses[index][1].ref.current.scale,
            modelsByProcesses[index][2].ref.current.scale
          ],
          {
            x: 0,
            y: 0,
            z: 0,
            stagger: 0.05,
            ease: 'Power1.easeInOut'
          }
        ),
        // there is a problem with gsap labels
        animationEndDuration(index)
      )
    })
  }, [])

  return (
    <>
      <group
        ref={modelsGroup}
        position={[0, responsiveCondition ? -5 : -4.7, 0]}>
        {modelsByProcesses.map((processModelGroup) =>
          processModelGroup.map((Model, index) => (
            <Model.component
              key={Model.key}
              ref={Model.ref}
              rotation={rotation}
              position={positionElements[index]}
              proportionalScale={proportionalScale}
            />
          ))
        )}
      </group>
    </>
  )
}

export default ProcessIcons
