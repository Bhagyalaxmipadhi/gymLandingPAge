import React, { useState } from "react";
import styles from "../Components/gym.module.css";
import trainicon from "../Components/trainicon.png";
import background from "../Components/background.jpg";
import aboutimg from "../Components/aboutimg.jpg";
import lining from "../Components/lining.png";
import training from "../Components/training.png";
import firstday from "../Components/firstday.jpg";
import schedule from "../Components/schedule.jpg";
import firstreview from "../Components/firstreview.jpg";
import secondreview from "../Components/secondreview.jpg";
import secondday from "../Components/secondday.jpg";
import thirdreview from "../Components/thirdreview.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

function Gymwebsite() {
  // Set the initial state to 0 to display the first class by default
  const [selectedBoxIndex, setSelectedBoxIndex] = useState(0);
  const [selectedClassIndex, setSelectedClassIndex] = useState(null);
  const [activeDay, setActiveDay] = useState("MONDAY");

  const handleDayClick = (day) => {
    setActiveDay(day);
  };

  const handleNavClick = (index) => {
    const ids = ["home", "about", "classes", "schedules", "contact"];
    const element = document.getElementById(ids[index]);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleTrainingClick = (index) => {
    setSelectedBoxIndex(index);
    const ids = ["firstClass", "secondClass", "thirdClass", "fourthClass"];
    const element = document.getElementById(ids[index]);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const people = [
    {
      trainerType: "Strength Trainer",
      img: firstreview,
      name: "John Doe",
      about:
        "Bitters cliche tattooed 8-bit distillery mustache. Keytar succulents gluten-free vegan church-key pour-over seitan flannel.",
    },
    {
      trainerType: "Muscle Trainer",
      img: secondreview,
      name: "Jane Smith",
      about:
        "Bitters cliche tattooed 8-bit distillery mustache. Keytar succulents gluten-free vegan church-key pour-over seitan flannel.",
    },
    {
      trainerType: "Power Trainer",
      img: thirdreview,
      name: "Alice Johnson",
      about:
        "Bitters cliche tattooed 8-bit distillery mustache. Keytar succulents gluten-free vegan church-key pour-over seitan flannel.",
    },
  ];
  const scheduleData = {
    MONDAY: [
      {
        class: "Fitness Class",
        time1: "10:00AM - 11:30AM",
        time2: "",
        instructor: "bhagyalaxmi",
      },
      {
        class: "Muscle Training",
        time1: "",
        time2: "",
        instructor: "balaram",
      },
      {
        class: "Body Building",
        time1: "",
        time2: "2:00PM - 3:30PM",
        instructor: "saibaba",
      },
      {
        class: "Yoga Training Class",
        time1: "",
        time2: "",
        instructor: "narayan",
      },
      {
        class: "Advanced Training",
        time1: "",
        time2: "",
        instructor: "chakradhar",
      },
    ],
    TUESDAY: [
      {
        class: "Fitness Class",
        time1: "10:00AM - 11:30AM",
        time2: "10:00AM - 11:30AM",
        instructor: "arvind",
      },
      { class: "Muscle Training", time1: "", time2: "", instructor: "ravi" },
      { class: "Body Building", time1: "", time2: "", instructor: "sanjay" },
      {
        class: "Yoga Training Class",
        time1: "",
        time2: "",
        instructor: "deepak",
      },
      {
        class: "Advanced Training",
        time1: "",
        time2: "",
        instructor: "suresh",
      },
    ],
    WEDNESDAY: [
      {
        class: "Fitness Class",
        time1: "",
        time2: "",
        instructor: "ramesh",
      },
      { class: "Muscle Training", time1: "", time2: "", instructor: "shyam" },
      { class: "Body Building", time1: "", time2: "", instructor: "mohan" },
      {
        class: "Yoga Training Class",
        time1: "10:00AM - 11:30AM	",
        time2: "",
        instructor: "ajay",
      },
      {
        class: "Advanced Training",
        time1: "",
        time2: "2:00PM - 3:30PM	",
        instructor: "sandeep",
      },
    ],
    THURSDAY: [
      {
        class: "Fitness Class",
        time1: "10:00AM - 11:30AM",
        time2: "10:00AM - 11:30AM",
        instructor: "neha",
      },
      { class: "Muscle Training", time1: "", time2: "", instructor: "manoj" },
      { class: "Body Building", time1: "", time2: "", instructor: "shiv" },
      {
        class: "Yoga Training Class",
        time1: "",
        time2: "",
        instructor: "pooja",
      },
      {
        class: "Advanced Training",
        time1: "",
        time2: "",
        instructor: "vinod",
      },
    ],
    FRIDAY: [
      {
        class: "Fitness Class",
        time1: "",
        time2: "09:00AM - 10:30AM",
        instructor: "meena",
      },
      { class: "Muscle Training", time1: "", time2: "", instructor: "ajith" },
      {
        class: "Body Building",
        time1: "2.30PM - 3.30PM",
        time2: "",
        instructor: "vikram",
      },
      {
        class: "Yoga Training Class",
        time1: "",
        time2: "",
        instructor: "bhavna",
      },
      {
        class: "Advanced Training",
        time1: "",
        time2: "",
        instructor: "arun",
      },
    ],
  };

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <h2 className={styles.logo}>
          TRAINING <span className={styles.highlight}>STUDIO</span>
        </h2>
        <ul>
          <li onClick={() => handleNavClick(0)}>Home</li>
          <li onClick={() => handleNavClick(1)}>About</li>
          <li onClick={() => handleNavClick(2)}>Classes</li>
          <li onClick={() => handleNavClick(3)}>Schedules</li>
          <li onClick={() => handleNavClick(4)}>Contact</li>
          <li>
            <button className={styles.nav_button}>SIGN UP</button>
          </li>
        </ul>
      </nav>
      <div className={styles.content} id="home">
        <img
          src={background}
          alt="Gym Background"
          className={styles.background}
        />
        <div className={styles.overlay}>
          <h4 className={styles.texts}>WORK HARDER, GET STRONGER</h4>
          <h1 className={styles.text}>
            EASY WITH OUR <span className={styles.highlight}>GYM</span>
          </h1>
          <button className={styles.hero_button}>BECOME A MEMBER</button>
        </div>
      </div>
      <div className={styles.hero} id="about">
        <h2 className={styles.title}>
          CHOOSE <span className={styles.highlight}>PROGRAM</span>
        </h2>
        <img src={lining} alt="line" className={styles.linelogo} />
        <p className={styles.para}>
          Training Studio is a free CSS template for gyms and fitness centers.
          <br /> You are allowed to use this layout for your business website.
        </p>
        <div className={styles.contenthero}>
          <div className={styles.block}>
            <img src={training} alt="train" className={styles.common} />
            <div className={styles.row}>
              <h5 className={styles.heading}>Basic Fitness</h5>
              <div className={styles.paras}>
                Please do not re-distribute this template ZIP file on any
                template collection website. This is not allowed.
              </div>
              <div className={styles.change}>DISCOVER MORE</div>
            </div>
          </div>

          <div className={styles.block}>
            <img src={training} alt="train" className={styles.common} />
            <div className={styles.row}>
              <h5 className={styles.heading}>Advanced Muscle Course</h5>
              <div className={styles.paras}>
                You may want to browse through Digital Marketing or Corporate
                HTML CSS templates on our website.
              </div>
              <div className={styles.change}>DISCOVER MORE</div>
            </div>
          </div>

          <div className={styles.block}>
            <img src={training} alt="train" className={styles.common} />
            <div className={styles.row}>
              <h5 className={styles.heading}>New Gym Training</h5>
              <div className={styles.paras}>
                If you wish to support TemplateMo website via PayPal, please
                feel free to contact us. We appreciate it a lot.
              </div>
              <div className={styles.change}>DISCOVER MORE</div>
            </div>
          </div>

          <div className={styles.block}>
            <img src={training} alt="train" className={styles.common} />
            <div className={styles.row}>
              <h5 className={styles.heading}>Basic Fitness</h5>
              <div className={styles.paras}>
                Please do not re-distribute this template ZIP file on any
                template collection website. This is not allowed.
              </div>
              <div className={styles.change}>DISCOVER MORE</div>
            </div>
          </div>

          <div className={styles.block}>
            <img src={training} alt="train" className={styles.common} />
            <div className={styles.row}>
              <h5 className={styles.heading}>Basic Fitness</h5>
              <div className={styles.paras}>
                Please do not re-distribute this template ZIP file on any
                template collection website. This is not allowed.
              </div>
              <div className={styles.change}>DISCOVER MORE</div>
            </div>
          </div>

          <div className={styles.block}>
            <img src={training} alt="train" className={styles.common} />
            <div className={styles.row}>
              <h5 className={styles.heading}>Basic Fitness</h5>
              <div className={styles.paras}>
                Please do not re-distribute this template ZIP file on any
                template collection website. This is not allowed.
              </div>
              <div className={styles.change}>DISCOVER MORE</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.about}>
        <img src={aboutimg} alt="img" className={styles.aboutimg} />
        <div className={styles.aboutoverlay}>
          <h4 className={styles.text}>
            DON’T<span className={styles.highlight}> THINK</span> , BEGIN{" "}
            <span className={styles.highlight}>TODAY</span>
          </h4>
          <h1 className={styles.texts}>
            Ut consectetur, metus sit amet aliquet placerat, enim est ultricies
            ligula, sit amet dapibus odio augue eget libero. Morbi tempus mauris
            a nisi luctus imperdiet.
          </h1>
          <button className={styles.hero_button}>BECOME A MEMBER</button>
        </div>
      </div>
      <div className={styles.hero} id="classes">
        <h2 className={styles.title}>
          OUR <span className={styles.highlight}>CLASSES</span>
        </h2>
        <img src={lining} alt="line" className={styles.linelogo} />
        <p className={styles.para}>
          Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed
          viverra <br /> ipsum dolor, ultricies fermentum massa consequat eu.
          You are allowed to use this layout for your business website.
        </p>
      </div>
      <div className={styles.classesContainer} id="classes">
        <div className={styles.blockbox}>
          <div className={styles.boxs} onClick={() => handleTrainingClick(0)}>
            <img src={trainicon} alt="icon" className={styles.icon} />
            <div
              className={styles.boxtext}
              style={{
                color: selectedBoxIndex === 0 ? "#c54313" : "inherit",
              }}
            >
              FIRST TRAINING CLASS
            </div>
          </div>
          <div className={styles.boxs} onClick={() => handleTrainingClick(1)}>
            <img src={trainicon} alt="icon" className={styles.icon} />
            <div
              className={styles.boxtext}
              style={{
                color: selectedBoxIndex === 1 ? "#c54313" : "inherit",
              }}
            >
              SECOND TRAINING CLASS
            </div>
          </div>
          <div className={styles.boxs} onClick={() => handleTrainingClick(2)}>
            <img src={trainicon} alt="icon" className={styles.icon} />
            <div
              className={styles.boxtext}
              style={{
                color: selectedBoxIndex === 2 ? "#c54313" : "inherit",
              }}
            >
              THIRD TRAINING CLASS
            </div>
          </div>
          <div className={styles.boxs} onClick={() => handleTrainingClick(3)}>
            <img src={trainicon} alt="icon" className={styles.icon} />
            <div
              className={styles.boxtext}
              style={{
                color: selectedBoxIndex === 3 ? "#c54313" : "inherit",
              }}
            >
              FOURTH TRAINING CLASS
            </div>
          </div>
          <button className={styles.boxbutton}>VIEW ALL SCHEDULES</button>
        </div>

        <div className={styles.classContent}>
          {selectedBoxIndex === 0 && (
            <div className={styles.firstcontainer} id="firstClass">
              <div className={styles.firsttraining}>
                <img src={firstday} alt="first" className={styles.firstday} />
                <div className={styles.firstdaytext}>
                  <h3 className={styles.headingText}>First Training Class</h3>
                  <p className={styles.para}>
                    Phasellus convallis mauris sed elementum vulputate. Donec
                    posuere leo sed dui eleifend hendrerit. Sed suscipit
                    suscipit erat, sed vehicula ligula. Aliquam ut sem fermentum
                    sem tincidunt lacinia gravida aliquam nunc. Morbi quis erat
                    imperdiet, molestie nunc ut, accumsan diam.
                  </p>
                  <button className={styles.hero_button}>VIEW SCHEDULE</button>
                </div>
              </div>
            </div>
          )}

          {selectedBoxIndex === 1 && (
            <div className={styles.firstcontainer} id="secondClass">
              <div className={styles.firsttraining}>
                <img src={secondday} alt="second" className={styles.firstday} />
                <div className={styles.firstdaytext}>
                  <h3 className={styles.headingText}>Second Training Class</h3>
                  <p className={styles.para}>
                    Phasellus convallis mauris sed elementum vulputate. Donec
                    posuere leo sed dui eleifend hendrerit. Sed suscipit
                    suscipit erat, sed vehicula ligula. Aliquam ut sem fermentum
                    sem tincidunt lacinia gravida aliquam nunc. Morbi quis erat
                    imperdiet, molestie nunc ut, accumsan diam.
                  </p>
                  <button className={styles.hero_button}>VIEW SCHEDULE</button>
                </div>
              </div>
            </div>
          )}

          {selectedBoxIndex === 2 && (
            <div className={styles.firstcontainer} id="thirdClass">
              <div className={styles.firsttraining}>
                <img src={firstday} alt="third" className={styles.firstday} />
                <div className={styles.firstdaytext}>
                  <h3 className={styles.headingText}>Third Training Class</h3>
                  <p className={styles.para}>
                    Phasellus convallis mauris sed elementum vulputate. Donec
                    posuere leo sed dui eleifend hendrerit. Sed suscipit
                    suscipit erat, sed vehicula ligula. Aliquam ut sem fermentum
                    sem tincidunt lacinia gravida aliquam nunc. Morbi quis erat
                    imperdiet, molestie nunc ut, accumsan diam.
                  </p>
                  <button className={styles.hero_button}>VIEW SCHEDULE</button>
                </div>
              </div>
            </div>
          )}

          {selectedBoxIndex === 3 && (
            <div className={styles.firstcontainer} id="fourthClass">
              <div className={styles.firsttraining}>
                <img src={firstday} alt="fourth" className={styles.firstday} />
                <div className={styles.firstdaytext}>
                  <h3 className={styles.headingText}>Fourth Training Class</h3>
                  <p className={styles.para}>
                    Phasellus convallis mauris sed elementum vulputate. Donec
                    posuere leo sed dui eleifend hendrerit. Sed suscipit
                    suscipit erat, sed vehicula ligula. Aliquam ut sem fermentum
                    sem tincidunt lacinia gravida aliquam nunc. Morbi quis erat
                    imperdiet, molestie nunc ut, accumsan diam.
                  </p>
                  <button className={styles.hero_button}>VIEW SCHEDULE</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className={styles.schedulecontent} id="schedules">
        <div className={styles.backgroundschedule}>
          <img src={schedule} alt="schedule" className={styles.schedule} />
        </div>
        <div className={styles.overlays}>
          <h1 className={styles.scheduletext}>
            CLASSES <span className={styles.highlight}>SCHEDULE</span>
          </h1>
          <img src={lining} alt="line" className={styles.linelogo} />
          <p className={styles.schedulepara}>
            Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed
            viverra <br /> ipsum dolor, ultricies fermentum massa consequat eu.
          </p>
          <div className={styles.weekname}>
            <div className={styles.weeks}>
              <ul className={styles.weekList}>
                <li
                  className={activeDay === "MONDAY" ? styles.active : ""}
                  onClick={() => handleDayClick("MONDAY")}
                >
                  MONDAY /
                </li>
                <li
                  className={activeDay === "TUESDAY" ? styles.active : ""}
                  onClick={() => handleDayClick("TUESDAY")}
                >
                  TUESDAY /
                </li>
                <li
                  className={activeDay === "WEDNESDAY" ? styles.active : ""}
                  onClick={() => handleDayClick("WEDNESDAY")}
                >
                  WEDNESDAY /
                </li>
                <li
                  className={activeDay === "THURSDAY" ? styles.active : ""}
                  onClick={() => handleDayClick("THURSDAY")}
                >
                  THURSDAY /
                </li>
                <li
                  className={activeDay === "FRIDAY" ? styles.active : ""}
                  onClick={() => handleDayClick("FRIDAY")}
                >
                  FRIDAY
                </li>
              </ul>
            </div>
            <div className={styles.tableschedule}>
              <table className={styles.scheduletable}>
                <thead>
                  <tr>
                    <th>Fitness Class</th>
                    <th>Time 1</th>
                    <th>Time 2</th>
                    <th>Instructor</th>
                  </tr>
                </thead>
                <tbody>
                  {scheduleData[activeDay].map((item, index) => (
                    <tr key={index} className={styles.tableRows}>
                      <th>{item.class}</th>
                      <td>{item.time1}</td>
                      <td>{item.time2}</td>
                      <td>{item.instructor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.schedulelast}>
        <h1 className={styles.scheduletext}>
          EXPERT <span className={styles.highlight}>TRAINERS</span>
        </h1>
        <img src={lining} alt="line" className={styles.linelogo} />
        <p className={styles.schedulepara}>
          Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed
          viverra <br /> ipsum dolor, ultricies fermentum massa consequat eu.
        </p>
      </div>

      <div className={styles.cardsContainer}>
        {people.map((person, index) => (
          <div key={index} className={styles.card}>
            <img
              src={person.img}
              alt={`${person.name}`}
              className={styles.cardImage}
            />
            <span className={styles.trainerType}>{person.trainerType}</span>

            <h3 className={styles.cardName}>{person.name}</h3>
            <p className={styles.cardAbout}>{person.about}</p>
            <div className={styles.socialIcons}>
              <FontAwesomeIcon className={styles.sIcons} icon={faTwitter} />
              <FontAwesomeIcon className={styles.sIcons} icon={faFacebookF} />
              <FontAwesomeIcon className={styles.sIcons} icon={faInstagram} />
              <FontAwesomeIcon className={styles.sIcons} icon={faLinkedinIn} />
            </div>
          </div>
        ))}
      </div>
      <div className={styles.contactContainer}>
        <div className={styles.mapContainer} id="contact">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.0576864249516!2d78.3709115!3d17.5073315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb916f1ad758bf%3A0x2cee766e9d429571!2sCross+X+Fitness+Box%2C+Adithya+nagar%2C+Kukatpally!5e0!3m2!1sen!2sin!4v1635808566867!5m2!1sen!2sin"
            width="800"
            height="590"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="eager"
          ></iframe>
        </div>
        <div className={styles.formbox}>
          <div class={styles.formcontainer}>
            <form class={styles.contactform}>
              <div class={styles.formrow}>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  required
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div class={styles.formrow}>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div class={styles.formrow}>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Message"
                  required
                />
              </div>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gymwebsite;
