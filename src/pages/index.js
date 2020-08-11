import React,{useState,useContext} from "react"
import { Context } from "../store/appContext"
import { isMobile } from "react-device-detect"
import {useWindowSize} from "../utils/hooks"
import Layout from "../components/Layout"
import Section from "../components/Section"
import Sponsors from "../components/Sponsors"
import KeySkillsDesktop from "../components/KeySkillsDesktop"
import KeySkillsMobile from "../components/KeySkillsMobile"
import { TopNav } from "../components/TopNav"
import ResourceIcon from "../components/ResourceIcon"
import JobCard from "../components/JobCard"
import EventsCard from "../components/eventsCard"
import {Button, Badge, CardDeck} from "react-bootstrap"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import beaconURL from "../images/beacon-logo.png"
import Container from "react-bootstrap/Container"
import Bubble from "../images/Chat-Bubbles.png"
import Briefcase from "../images/briefcase.svg"
import CalendarStar from "../images/calendar-star.svg"
import ChartNetwork from "../images/chart-network.svg"
import CommentPlus from "../images/comment-plus.svg"


export default function Home() {
    const { store, actions } = useContext(Context)
    const [skill,setSkill] = useState(null);
    const [type,setType] = useState("software-engineering");
    const [course,setCourse] = useState(null);
    const [width,height] = useWindowSize();
    
    const meta = store.homepageData.meta
    const keySkillsMenu = store.homepageData.keySkillsMenu
    const heroFeatures = [
      {
        title: "Job Postings",
        bg: "#7CE6C8",
        icon: <Briefcase fill="#4F8B7A" />,
      },
      {
        title: "Skill Pathways",
        bg: "#4044AA",
        icon: <ChartNetwork fill="#4044AA" />,
      },
      {
        title: "Career Coaching",
        bg: "#CACACA",
        icon: <CommentPlus fill="#F8FAFA" />,
      },
      {
        title: "Events & Resources",
        bg: "#F9DE8E",
        icon: <CalendarStar fill="#E1BB44" />,
      },
    ]

    

    return (
      <Layout bodyClass="home" description="" lang="en" meta={meta}>
        <Section className="home-hero h-100 position-relative">
          <TopNav />
          <Container className="py-4">
            <Row className="mb-lg-5 mx-auto">
              <Col xs={12}>
                <h1 className="mb-3">Find a new career in Miami Tech</h1>
                <h2>Fast track to a job through curated education pathways</h2>
              </Col>
            </Row>
            <Row className="pt-lg-5 feature-row container mx-auto">
              {heroFeatures.map((item, index) => (
                <Col xs={6} md={4} lg={3} key={index}>
                  <ResourceIcon
                    title={item.title}
                    bg={item.bg}
                    icon={item.icon}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </Section>

        <Section className="explore-jobs">
          <Container className="exjob">
            <Row className="mb-5 mx-auto">
              <Col xs={12}>
                <h1 className="mb-3 exjoTitle">
                  Explore <span>jobs you`ll love</span>
                </h1>
                <h2 className="exjoSub">from companies hiring locally</h2>
              </Col>
            </Row>
            <Row className="mb-5 mx-auto">
              <Col xs={12}>
                <Button variant="info">
                  <Badge pill variant="light" className="mr-1 buttonGreen">
                    &nbsp;
                  </Badge>
                  Design
                </Button>
                <Button variant="primary">
                  <Badge pill variant="light" className="mr-1 buttonBlue">
                    &nbsp;
                  </Badge>
                  engineering
                </Button>
                <Button variant="warning">
                  <Badge pill variant="light" className="mr-1 buttonYellow">
                    &nbsp;
                  </Badge>
                  product
                </Button>
              </Col>
            </Row>
            {/* style={{overflowX: "scroll"}} */}
            <div className="h-scroll">
              <div className="h-scroll-inner">
                <JobCard
                  jobType="product"
                  jobTitle="Product Designer"
                  companyName="Kaseya"
                  date="Posted 3 days ago"
                />
                <JobCard
                  jobType="product"
                  jobTitle="Web Developer"
                  companyName="Kaseya"
                  date="Posted 3 days ago"
                />
                <JobCard
                  jobType="product"
                  jobTitle="Product Manager"
                  companyName="Kaseya"
                  date="Posted 3 days ago"
                />
                <JobCard
                  jobType="product"
                  jobTitle="Web Developer"
                  companyName="Kaseya"
                  date="Posted 3 days ago"
                />
                <JobCard
                  jobType="product"
                  jobTitle="Product Manager"
                  companyName="Kaseya"
                  date="Posted 3 days ago"
                />
                <JobCard
                  jobType="product"
                  jobTitle="Web Developer"
                  companyName="Kaseya"
                  date="Posted 3 days ago"
                />
                <JobCard
                  jobType="product"
                  jobTitle="Product Manager"
                  companyName="Kaseya"
                  date="Posted 3 days ago"
                />
                <JobCard
                  jobType="product"
                  jobTitle="Web Developer"
                  companyName="Kaseya"
                  date="Posted 3 days ago"
                />
                <JobCard
                  jobType="product"
                  jobTitle="Product Manager"
                  companyName="Kaseya"
                  date="Posted 3 days ago"
                />
              </div>
            </div>
          </Container>
        </Section>

        <Section
          className={
            width <= 1080 || isMobile
              ? "key-skills mobile d-flex flex-column align-items-center justify-content-center py-5"
              : "key-skills d-flex flex-column align-items-center justify-content-center"
          }
        >
          <Container>
            <h2
              className={
                width <= 1080 || isMobile
                  ? "text-white mb-0"
                  : "text-white mb-3"
              }
            >
              <span className="text-warning">Learn</span> Key Skills
            </h2>
            <p
              className={
                width <= 1080 || isMobile
                  ? "text-warning mb-5 pb-0"
                  : "text-warning h2 mb-5 pb-5"
              }
            >
              to land jobs of the future
            </p>
          </Container>
          {width <= 990 || isMobile ? (
            <KeySkillsMobile
              keySkillsMenu={keySkillsMenu}
              courseData={store && store.programs}
              course={course}
              setCourse={setCourse}
              setSkill={setSkill}
              skill={skill}
              type={type}
              setType={setType}
              path={keySkillsMenu.find(item => item.key === type)}
            />
          ) : (
            <KeySkillsDesktop
              keySkillsMenu={keySkillsMenu}
              courseData={store && store.programs}
              course={course}
              setCourse={setCourse}
              setSkill={setSkill}
              skill={skill}
              type={type}
              setType={setType}
              path={keySkillsMenu.find(item => item.key === type)}
            />
          )}
        </Section>

        <Section className="career-coaching">
          <Container className="coachingSec">
            <Row className="mb-5 mx-auto">
              <Col xs={12}>
                <h1 className="mb-3 coachTitle">
                  Virtual <span>Career Coaching</span>
                </h1>
                <h2 className="coachSub">guiding your job search process</h2>
              </Col>
            </Row>
            <Row>
              <Col md={6} className="bubbleSec">
                <img
                  src={Bubble}
                  className="img-fluid"
                  alt="Responsive img"
                ></img>
              </Col>
              <Col md={6} className="descSec">
                <h3>
                  1 ON 1 <span>COACHING</span>
                </h3>
                <hr />
                <p className="text-left lead">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  volutpat ut nunc at ultricies. Cras massa lacus, maximus id
                  ligula sed, porttitor ultrices magna. Sed sed consequat magna.
                  Integer vulputate augue metus, a viverra odio tristique ut.
                  Proin efficitur neque vitae nisi dictum efficitur. In mi leo,
                  finibus nec porttitor vitae, cursus eu tortor. Nam vitae odio
                  eu neque scelerisque porttitor.
                </p>
                <button type="button" className="btn btn-primary">
                  Button 1
                </button>
              </Col>
            </Row>
          </Container>
        </Section>

        <Section className="section-events">
          <Container className="eventContainer">
            <Row className="mb-5 mx-auto">
              <Col xs={12}>
                <h1 className="mb-3 eventTitle">
                  Events <span>& Resources</span>
                </h1>
                <h2 className="eventSub">
                  Network and make connections virtually
                </h2>
              </Col>
            </Row>
            <Row className="mb-5 mx-auto workshopRow">
              <Col xs={12}>
                <h2 className="workshopTitle">Upcoming Workshops</h2>
              </Col>
            </Row>
            <CardDeck>
              <EventsCard
                eventName="1MPACT: Impactful Initiatives to Support the Local Business Community"
                speakerNam="Doug Skoke"
                speakerPosition="President, CEO"
                comingFrom="BENJAMIN DOUGLAS"
              />
              <EventsCard
                eventName="1MPACT: Impactful Initiatives to Support the Local Business Community"
                speakerNam="Doug Skoke"
                speakerPosition="President, CEO"
                comingFrom="BENJAMIN DOUGLAS"
              />
            </CardDeck>
          </Container>
        </Section>

        <Section className="job-search">
          <div className="container">
            <h2 className="text-left">Want to nail your job search?</h2>
            <h3 className="text-left py-1">
              check out our free job search filed guide
            </h3>
            <p className="pt-5 pb-3">
              30 exclusive tips & tricks form recruiting pros for navigating
              your search ducing COVID-19
            </p>
            <button className="btn btn-primary btn-lg">Download Guide</button>
          </div>
        </Section>

        <Section className="section-sponsors container">
          <h2 className="text-center">MiamiTech.Works Coalition</h2>
          <h3 className="text-center">Made possible by</h3>
          <div className="mb-2">
            <img src={beaconURL} />
          </div>
          <div className="logos">
            <Sponsors />
          </div>
        </Section>
      </Layout>
    )
}
