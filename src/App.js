import React, { Component } from "react";
import "./App.css";
import image01 from "./images/page01wf.png";
import image02 from "./images/page02wf.png";
import image03 from "./images/page03wf.png";
import image04 from "./images/page04wf.png";
import image05 from "./images/page05wf.png";
import image06 from "./images/page06wf.png";
import image07 from "./images/page07wf.png";
import image08 from "./images/page08wf.png";
import image09 from "./images/page09wf.png";
import image10 from "./images/page10wf.png";
import image11 from "./images/page11wf.png";

import avatar from "./images/Avatar.png";
import salmon from "./images/salmon.jpg";
import steak from "./images/steak.jpg";
import chocolate from "./images/chocolate.jpg";
import flowers from "./images/flowers.jpg";
import igloo from "./images/igloo.jpg";

import intro from "./audio/intro.mp3";
import one from "./audio/1.1_metacog.mp3";
import two from "./audio/1.2_metacog.mp3";
import three from "./audio/1.3_metacog.mp3";
import four from "./audio/1.4_metacog.mp3";
import five from "./audio/1.5_metacog.mp3";
import six from "./audio/1.6_metacog.mp3";
import seven from "./audio/1.7_metacog.mp3";
import eight from "./audio/1.8_metacog.mp3";
import nine from "./audio/1.9_metacog.mp3";
import ten from "./audio/1.10_metacog.mp3";
import eleven from "./audio/1.11_metacog1.mp3";

var slideIndex = 1;
export class App extends Component {
  constructor(props) {
    super();
    this.firstQ = React.createRef();
  }

  componentDidUpdate() {
    this.showSlides(slideIndex);
  }

  showSlides(n) {
    if (document.getElementById("book")) {
      var i;
      var slides = Array.from(document.getElementsByClassName("slide"));
      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[slideIndex - 1].style.display = "flex";
    }
  }

  plusSlides(n) {
    if (document.getElementById("pageNum")) {
      this.showSlides((slideIndex += n));
      document.getElementById("pageNum").innerHTML = String(slideIndex - 1);
      if (slideIndex == 1) {
        document.getElementById("pageNum").innerHTML = "";
      }
      if (n > 0) {
        //document.getElementById("n").style.display = "none";
      } else {
        document.getElementById("n").style.display = "block";
      }
      if (slideIndex >= 3) {
        document.getElementById("p").style.display = "block";
      } else {
        //document.getElementById("p").style.display = "none";
      }
    }
  }

  toggle(id) {
    if (document.getElementById(id)) {
      var text = document.getElementById(id).style.display;
      if (text == "flex") {
        document.getElementById(id).style.display = "none";
      } else {
        document.getElementById(id).style.display = "flex";
      }
    }
  }

  toggleBlock(id) {
    if (document.getElementById(id)) {
      var text = document.getElementById(id).style.display;
      if (text == "flex") {
        document.getElementById(id).style.display = "none";
      } else {
        document.getElementById(id).style.display = "block";
      }
    }
  }

  show(id) {
    if (document.getElementById(id)) {
      document.getElementById(id).style.display = "block";
    }
  }

  toggleSound(id) {
    var sound = document.getElementById(id);
    if (sound.paused || sound.duration == 0) {
      sound.play();
    } else {
      sound.pause();
    }
  }

  hide(id) {
    if (document.getElementById(id)) {
      document.getElementById(id).style.display = "none";
    }
  }

  showNext() {
    if (document.getElementById("n")) {
      document.getElementById("n").style.display = "block";
    }
  }

  playQuestion() {
    if (
      document.getElementById("story-retel") &&
      document.getElementById("pause") &&
      document.getElementById("play")
    ) {
      var question = document.getElementById("story-retel");
      console.log(question.duration);
      document.getElementById("pause").style.display = "block";
      document.getElementById("play").style.display = "none";
      question.play();
    }
  }

  updateTime() {
    var question = document.getElementById("story-retel");
    document.getElementById("audio-time").innerHTML = question.currentTime;
  }

  pauseQuestion() {
    if (
      document.getElementById("story-retel") &&
      document.getElementById("pause") &&
      document.getElementById("play")
    ) {
      var question = document.getElementById("story-retel");
      console.log(question.currentTime);
      document.getElementById("pause").style.display = "none";
      document.getElementById("play").style.display = "block";
      question.pause();
    }
  }

  selectOption(id, num) {
    var options = ["a", "b", "c"];
    for (var i = 0; i < options.length; i++) {
      var optionId = num + options[i];
      document.getElementById(optionId).style.fontWeight = "normal";
    }
    document.getElementById(id).style.fontWeight = "bold";
  }

  record() {
    if (document.getElementById("recordButton")) {
      if (document.getElementById("recordButton").innerHTML == "ENREGISTRER") {
        document.getElementById("recordButton").innerHTML = "PAUSE";
      } else {
        document.getElementById("recordButton").innerHTML = "ENREGISTRER";
      }
    }
  }

  render() {
    return (
      <div id="book">
        <audio id="one">
          <source src={one} type="audio/mpeg" />
        </audio>
        <audio id="two">
          <source src={two} type="audio/mpeg" />
        </audio>
        <audio id="three">
          <source src={three} type="audio/mpeg" />
        </audio>
        <audio id="four">
          <source src={four} type="audio/mpeg" />
        </audio>
        <audio id="five">
          <source src={five} type="audio/mpeg" />
        </audio>
        <audio id="six">
          <source src={six} type="audio/mpeg" />
        </audio>
        <audio id="seven">
          <source src={seven} type="audio/mpeg" />
        </audio>
        <audio id="eight">
          <source src={eight} type="audio/mpeg" />
        </audio>
        <audio id="nine">
          <source src={nine} type="audio/mpeg" />
        </audio>
        <audio id="ten">
          <source src={ten} type="audio/mpeg" />
        </audio>
        <audio id="eleven">
          <source src={eleven} type="audio/mpeg" />
        </audio>

        {/* Slideshow container */}
        <div className="phoneText">Not available on this device</div>

        <div className="slideshow-container">
          <div className="title">The Woman and Her Bear </div>
          <div className="slide-container">
            <div className="arrow-container">
              <div className="next" id="p" onClick={() => this.plusSlides(-1)}>
                &#10094;
              </div>
            </div>

            {/* Slides */}
            {/* Intro Slide */}
            <div className="slide fade" style={{ display: "flex" }}>
              <div className="image-container">
                <img className="image" src={image01} alt="Intro page image" />
                <div className="avatar-container">
                  <div className="flex-row">
                    <img
                      className="avatar"
                      src={avatar}
                      alt="Owl avatar"
                      onClick={() => {
                        this.show("intro");
                        this.hide("click1");
                        this.showNext();
                      }}
                    />
                    <i id="click1" class="fa fa-arrow-left">
                      &larr;Click Here
                    </i>
                  </div>
                </div>
                <div id="intro" className="speech sb1">
                  The family is the most important unit in Inuit society. During
                  the winter about 5 to 10 families would gather together.
                  Within the family, the men and the women performed important
                  jobs. The men usually did the hunting. The women usually
                  prepared the food and then used the skins and furs to make
                  clothing and tents. The women also distributed food to other
                  families in the group. Sharing is an important part of Inuit
                  culture. Here is a video of women preparing skins for sewing.
                </div>
                <audio id="intro-sound">
                  <source src={intro} type="audio/mpeg" />
                </audio>
              </div>
            </div>
            {/* Slide 1 */}
            <div className="slide fade">
              <div className="image-container">
                <img className="image" src={image01} alt="First page image" />
                <div className="avatar-container">
                  <div className="flex-row">
                    <img className="avatar" src={avatar} alt="Owl avatar" />
                  </div>
                  <p>
                    Long ago in the far north, there lived a village of people
                    known as a the Inuit. They lived on the shores of the icy
                    Arctic. They depended upon the{" "}
                    <span className="highlight">bounty</span> of the salmon and
                    seal and the creatures of the snow to feed themselves. All
                    the young men were hunters and fishers.
                    <span
                      className="doneButton"
                      id="done1"
                      onClick={() => {
                        this.toggle("s1");
                        this.hide("done1");
                        this.showNext();
                        this.toggleSound("one");
                      }}
                    >
                      Done
                    </span>
                  </p>
                  <div id="s1" className="dictionary">
                    <span className="bold">bounty (noun):</span> A large amount.
                    There was plenty of salmon, seal, and creatures of the snow
                    to provide them with food.
                  </div>
                </div>
              </div>
            </div>
            {/* Slide 2 */}
            <div className="slide fade">
              <div className="image-container">
                <img className="image" src={image02} alt="Second page image" />
                <div className="avatar-container">
                  <div className="flex-row">
                    <img className="avatar" src={avatar} alt="Owl avatar" />
                  </div>
                  <p>
                    One old woman lived alone. She had no husband and no sons to
                    hunt or fish for her. Her neighbors shared their food with
                    her but she was lonely. She longed for a{" "}
                    <span className="highlight">family</span> of her own. She
                    often walked along the shore, looking far out to sea,
                    praying that the gods might send her a son.
                    <span
                      className="doneButton"
                      id="click3"
                      onClick={() => {
                        this.showNext();
                        this.hide("click3");
                        this.toggle("s2");
                        this.toggleSound("two");
                      }}
                    >
                      Done
                    </span>
                  </p>
                  <div id="s2" className="speech2">
                    A family is a group of people who love and care for each
                    other. Press the green record button to describe the people
                    who are in your in your family.
                  </div>
                </div>
              </div>
            </div>
            {/* Slide 3 */}
            <div className="slide fade">
              <div className="image-container">
                <img className="image" src={image03} alt="Third page image" />
                <div className="avatar-container">
                  <div className="flex-row">
                    <img className="avatar" src={avatar} alt="Owl avatar" />
                  </div>
                  <p>
                    One cold winter day, the woman was walking by the sea when
                    she spotted a tiny white polar bear sitting all{" "}
                    <span className="highlight">alone</span> on the thick ice.
                    His mother was nowhere in sight. "Someone must have killed
                    her," she said softly, and she walked onto the ice, picked
                    up the cub and looked into his eyes. "You will be my son,"
                    she said. She called him Kunik.
                    <span
                      className="doneButton"
                      id="click4"
                      onClick={() => {
                        this.showNext();
                        this.hide("click4");
                        this.toggle("s3");
                        this.toggleSound("three");
                      }}
                    >
                      Done
                    </span>
                  </p>
                  <div id="s3" className="speech2">
                    The bear is sitting alone on the ice. How do you think the
                    bear feels?{" "}
                  </div>
                </div>
              </div>
            </div>
            {/* Slide 4 */}
            <div className="slide fade">
              <div className="image-container">
                <img className="image" src={image04} alt="Fourth page image" />
                <div className="avatar-container">
                  <div className="flex-row">
                    <img className="avatar" src={avatar} alt="Owl avatar" />
                  </div>
                  <p>
                    The old woman took her cub back to her home. From that day
                    on, she shared all her food with Kunik, and a strong{" "}
                    <span className="highlight">bond</span> grew between the
                    two.
                    <span
                      className="doneButton"
                      id="click5"
                      onClick={() => {
                        this.showNext();
                        this.hide("click5");
                        this.toggle("s4");
                        this.toggleSound("four");
                      }}
                    >
                      Done
                    </span>
                  </p>
                  <div id="s4" className="multiple">
                    Select all the examples of the meaning of the word "bond"
                    <div
                      className="choice"
                      id="4a"
                      onClick={() => this.selectOption("4a", 4)}
                    >
                      (a) Two pieces of paper are stuck together with glue.
                    </div>
                    <div
                      className="choice"
                      id="4b"
                      onClick={() => this.selectOption("4b", 4)}
                    >
                      (b) Two boys share a close friendship.
                    </div>
                    <div
                      className="choice"
                      id="4c"
                      onClick={() => this.selectOption("4c", 4)}
                    >
                      (c) Two rabbits go hopping over the snow.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Slide 5 */}
            <div className="slide fade">
              <div className="image-container">
                <img className="image" src={image05} alt="Fifth page image" />
                <div className="avatar-container">
                  <img className="avatar" src={avatar} alt="Owl avatar" />
                  <p>
                    The village children loved Kunik, too. Now the woman was
                    never <span className="highlight">lonely</span>, for her
                    son, the bear, and all the village children kept her company
                    all day. She would stand by her igloo and smile as Kunik and
                    the children rolled in the snow and slid on the ice. Kunik
                    was gentle with the children as if they were his brothers
                    and sisters.
                    <span
                      className="doneButton"
                      id="click6"
                      onClick={() => {
                        this.showNext();
                        this.hide("click6");
                        this.toggle("s5");
                        this.toggleSound("five");
                      }}
                    >
                      Done
                    </span>
                  </p>
                  <div id="s5" className="multiple">
                    The old woman is not lonely now. Why was she lonely before?{" "}
                    <div
                      className="choice"
                      id="5a"
                      onClick={() => this.selectOption("5a", 5)}
                    >
                      (a) She lived alone.
                    </div>
                    <div
                      className="choice"
                      id="5b"
                      onClick={() => this.selectOption("5b", 5)}
                    >
                      (b) She was sitting by herself.
                    </div>
                    <div
                      className="choice"
                      id="5c"
                      onClick={() => this.selectOption("5c", 5)}
                    >
                      (c) Her husband and son were out fishing.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Slide 6 */}
            <div className="slide fade">
              <div className="image-container">
                <img className="image" src={image06} alt="Sixth page image" />
                <div className="avatar-container">
                  <img className="avatar" src={avatar} alt="Owl avatar" o />
                  <p>
                    Kunk grew taller and smarter. The children taught him to
                    fish. By springtime he was fishing on his own, and every
                    afternoon he came home carrying fresh salmon for his mother.
                    The old woman was now the{" "}
                    <span className="highlight">happiest</span> of all the
                    villagers. She was so proud of the her little bear that
                    whenever he returned home, she would say proudly to anyone
                    nearby, "He's the finest fisher in all the village."
                    <span
                      className="doneButton"
                      id="click7"
                      onClick={() => {
                        this.showNext();
                        this.hide("click7");
                        this.toggle("s6");
                        this.toggleSound("six");
                      }}
                    >
                      Done
                    </span>
                  </p>
                  <div id="s6" className="dictionary">
                    <span className="bold">Happy (adj):</span> The woman is
                    happy when her son carries home fresh salmon. The woman is
                    happier because she is no longer alone. The woman is the
                    happiest of all the villagers.
                  </div>
                </div>
              </div>
            </div>
            {/* Slide 7 */}
            <div className="slide fade">
              <div className="image-container">
                <img className="image" src={image07} alt="Seventh page image" />
                <div className="avatar-container">
                  <img className="avatar" src={avatar} alt="Owl avatar" />
                  <p>
                    Before long the men began to began to feel envious. "What
                    will we do?" they asked each other. "That bear brings home
                    the fattest seals and the biggest salmon. "He must be
                    stopped," another man said, "He has grown far too big. He is
                    a danger to our families." The men decided to kill the bear.
                    Although they knew how much the old woman loved the bear,
                    their envy made them mean.
                    <span
                      className="doneButton"
                      id="click8"
                      onClick={() => {
                        this.showNext();
                        this.hide("click8");
                        this.toggle("s7");
                        this.toggleSound("seven");
                      }}
                    >
                      Done
                    </span>
                  </p>
                  <div id="s7" className="speech2">
                    Why were the men jealous of Kunik?
                  </div>
                </div>
              </div>
            </div>
            {/* Slide 8 */}
            <div className="slide fade">
              <div className="image-container">
                <img className="image" src={image08} alt="Eight page image" />
                <div className="avatar-container">
                  <img className="avatar" src={avatar} alt="Owl avatar" />
                  <p>
                    A little boy <span className="highlight">overheard</span>{" "}
                    the men talking. He ran to the old woman's home to tell her
                    of the terrible plan. When she heard the news, she threw her
                    arms around the bear and wept. "No," she said, "they must
                    not kill my child." At once she set off to visit every igloo
                    in the village. She begged each man not to kill her
                    beautiful bear. "He is a danger to our children," they said.
                    "We cannot let him live."
                    <span
                      className="doneButton"
                      id="click9"
                      onClick={() => {
                        this.showNext();
                        this.hide("click9");
                        this.toggle("s8");
                        this.toggleSound("eight");
                      }}
                    >
                      Done
                    </span>
                  </p>
                  <div id="s8" className="speech2">
                    A litte boy accidentally heard the conversation between the
                    men.
                  </div>
                </div>
              </div>
            </div>
            {/* Slide 9 */}
            <div className="slide fade">
              <div className="image-container">
                <img className="image" src={image09} alt="Ninth page image" />
                <div className="avatar-container">
                  <img className="avatar" src={avatar} alt="Owl avatar" />
                  <p>
                    The old woman ran home and said to Kunik, "Your life is in
                    danger. Run away, but don't go so far that I cannot find
                    you." He had{" "}
                    <span className="highlight">tears in his eyes</span> but he
                    obeyed his mother's wishes.
                    <span
                      className="doneButton"
                      id="click10"
                      onClick={() => {
                        this.showNext();
                        this.hide("click10");
                        this.toggleBlock("s9");
                        this.toggleSound("nine");
                      }}
                    >
                      Done
                    </span>
                  </p>
                  <div id="s9" className="speech2">
                    Kunik did what his mother asked, even though it made him
                    sad. Can you think of a time when you did something you were
                    asked to do, even though it made you sad?
                  </div>
                </div>
              </div>
            </div>
            {/* Slide 10 */}
            <div className="slide fade">
              <div className="image-container">
                <img className="image" src={image10} alt="Tenth page image" />
                <div className="avatar-container">
                  <img className="avatar" src={avatar} alt="Owl avatar" />
                  <p>
                    For many days the old woman and the children grieved their
                    loss. And then one morning the old woman went out looking
                    for Kunik. After many hours of walking and calling his name,
                    she saw her bear running towards her. They embraced but
                    Kunik could see that his mother was hungry so he ran to get
                    her fresh meat. The old woman cut up the fresh seal. She
                    gave her son the best slices of blubber and carried the rest
                    home. Every day after that the old woman met her son. The
                    bear brought his mother fresh meat or fish.
                    <span
                      className="doneButton"
                      id="click11"
                      onClick={() => {
                        this.showNext();
                        this.hide("click11");
                        this.toggle("s10");
                        this.toggleSound("ten");
                      }}
                    >
                      Done
                    </span>
                  </p>
                  <div id="s10" className="multiple">
                    Kunik brought food for his mother because he loves her.
                    Which of these would you give to someone you love?
                    <div
                      className="flex-row"
                      style={{ justifyContent: "space-evenly" }}
                    >
                      <img src={salmon} className="choice-image" />
                      <img src={chocolate} className="choice-image" />
                      <img src={steak} className="choice-image" />
                      <img src={flowers} className="choice-image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 11 */}
            <div className="slide fade">
              <div className="image-container">
                <img className="image" src={image11} alt="Tenth page image" />
                <div className="avatar-container">
                  <img className="avatar" src={avatar} alt="Owl avatar" />
                  <p>
                    After awhile the villagers grew to understand the love
                    between the woman and the bear was strong and true. From
                    that point on, they told with pride and respect the tale of
                    the unbroken love between the old woman and her son.
                    <span
                      className="doneButton"
                      id="click12"
                      onClick={() => {
                        this.showNext();
                        this.hide("click12");
                        this.toggle("s11");
                        this.toggleSound("eleven");
                      }}
                    >
                      Done
                    </span>
                  </p>
                  <div id="s11" className="speech2">
                    Before, the villagers were <input className="input-word" />{" "}
                    of Kunik. Now, they are
                    <input className="input-word" /> of him. Before, the
                    villagers were <input className="input-word" /> of Kunik.
                    Now, they <input className="input-word" /> him.
                  </div>
                </div>
              </div>
            </div>

            <div className="arrow-container">
              <div className="next" id="n" onClick={() => this.plusSlides(1)}>
                &#10095;
              </div>
            </div>
          </div>

          <div className="pageNum-container">
            <p id="pageNum"></p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
