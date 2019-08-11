<template>
  <div class='content-box'>
    <div id='membrane'>
      <div  id='sector-home' class='sector'>
        <div class='slide-imgholder'>
          <img src='https://picsum.photos/1000/1000'>
        </div>
      </div>
      <div id='home' class='sector content-sector scheme-pink d-flex flex-column'>
        <div class='big-text mb-4' v-for="(item,idx) in taiwanSimilarProgram" :key="item.name + idx">
          <span>{{item.name}}</span>
        </div>
        <hr class='w-100'>
        <div class='big-text mb-4' v-for="(item,idx) in foreignSimilarProgram" :key="item.name + idx">
          <span>{{item.name}}</span>
        </div>
      </div>
      <div id='about' class='sector content-sector scheme-blue'>
        <router-link to='/test'>test</router-link>
        <div>
          <h1>Strategy, design, development, and stroopwafels™</h1>
          <p>Type/Code designs and builds digital products and experiences. We collaborate with ambitious clients to bring powerful ideas to life. We find clever solutions to hard problems. We love to immerse ourselves in new domains. We strive to make things beautiful, intuitive, functional, and effective.</p>
          <h2 style='margin-top: 10rem'>Let's work together.</h2>
          <p>Take a peek at our work, services, and approach, and let's talk about how we might collaborate on your next project:</p>
          <p>
            <a class="button" href="mailto:hello@typecode.com" target="_blank">hello@typecode.com</a>
          </p>
          <h6 class='about-label' style='margin-top: 10rem'>FOLLOW US</h6>
          <div class='follow'>
            <a class="button follow-btn" href="http://facebook.com/typecode" target="_blank" rel="noopener"><span>Facebook</span></a>
          </div>
          <h6 class='about-label' style='margin-top: 10rem'>OUR TEAM</h6>
          <div class='team'>
            <div class='team-member' v-for="(item,idx) in teamMembers" :key="item.engName + idx">
              <div class='team-member-avatar'>
                <div class='member-photo' v-bind:style="{ 'background-image': 'url(' + item.url + ')' }"></div>
              </div>
              <div class='team-member-meta mt-2'>
                <h6 class='member-name'>{{item.chineseName}}</h6>
                <span class='member-role'>{{item.role}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='students_works'>
        <div class='half-student-intro sector scheme-dark content-sector'>
          <h1 class='big-style-text' style="margin-bottom: 100px">
            <span>Meet</span>
            <span>the</span>
            <span>people</span>
            <span>who</span>
            <span>help</span>
            <span>bring</span>
            <span class='highlight-red'>
              <span style='padding: 0px 5px 0px 5px'>our</span>
              <span style='padding: 0px 5px 0px 5px'>vision</span>
            </span>
            <span>to</span>
            <span>life.</span>
          </h1>
          <h5 class='mt-5'>
            Everyone here at This is Beyond has a role to play in our journey (while having plenty of fun at the same time). These are some of the people leading the way…
          </h5>
        </div>
        <div class='half-student-intro sector scheme-dark content-sector'>
          <div class='inner-content'>
            <div class='people-grid'>
              <div class='student-box' v-for="(item,idx) in nthuStudents" :key="item.name + idx + 'works'">
                <div class='student-img' style="background-image: url(https://www.thisisbeyond.com/wp-content/uploads/2019/04/serge_MG_8313-1500x1000.jpg)"></div>
                <header>
                  <div class='inner'>
                    <div class='student-meta'>
                      <h4>{{item.name}}</h4>
                      <span>{{item.description}}</span>
                    </div>
                  </div>
                </header>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: 'HelloWorld',
  data() {
    return {
      currentPage: 0,
      currentOffset: 0,
      taiwanSimilarProgram: [{ name: '清大實驗教育學程' }, { name: '交大百川學士學程' }, { name: '成大不分系學士學程' }],
      foreignSimilarProgram: [
        { name: 'Brown: Independent Concentration ' },
        { name: 'Cornell: College Scholar' },
        { name: 'Yale: Special Divisional Majors' },
        { name: 'Dartmouth: Special Majors' },
        { name: 'Harvard: Special Concentration' },
        { name: 'Princeton: Independent Concentration' },
      ],
      teamMembers: [
        { chineseName: '陳素燕', engName: 'Su-Yen Chen', role: '計畫主持人', url: 'https://tcp-prod.s3.amazonaws.com/images/avatars_zeke.width-600.jpg' },
        { chineseName: '李佳純', engName: 'Chiachun', role: '計畫助理', url: 'https://tcp-prod.s3.amazonaws.com/images/avatars_lev.width-600.jpg' },
        { chineseName: '林芳如', engName: 'Fangzu', role: '招集人', url: 'https://tcp-prod.s3.amazonaws.com/images/avatars_lev.width-600.jpg' },
        { chineseName: '阮羿寧', engName: 'Yining-Juan', role: '副招集人', url: 'https://tcp-prod.s3.amazonaws.com/images/avatars_lev.width-600.jpg' },
        { chineseName: 'Karen', engName: 'Karen', role: '翻譯實習生', url: 'https://tcp-prod.s3.amazonaws.com/images/avatars_lev.width-600.jpg' },
      ],
      nthuStudents: [
        { name: '林芳如', description: '達祖小學支教，國際論壇召集人' },
        { name: '林芳如', description: '達祖小學支教，國際論壇召集人' },
        { name: '林芳如', description: '達祖小學支教，國際論壇召集人' },
        { name: '林芳如', description: '達祖小學支教，國際論壇召集人' },
        { name: '林芳如', description: '達祖小學支教，國際論壇召集人' },
        { name: '林芳如', description: '達祖小學支教，國際論壇召集人' },
        { name: '林芳如', description: '達祖小學支教，國際論壇召集人' },
      ],
    };
  },
  methods: {

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

html, body {
  margin: 0px;
  padding: 0px;
  overflow: hidden;
}
* {
  font-family: 微軟正黑體;
  position: relative;
  animation-delay: 0.01s;
}
.scheme-pink {
  background-color: #FFF8E7;
}
.scheme-blue {
  background-color: #9FD4CA;
}
.scheme-dark {
  background-color: #121E23;
}
.content-box {
  width: 100%;
  overflow: hidden;
}
#membrane {
  width: 250vw;
  height: 100%;
  left: 0px;
}
.sector {
  width: 50vw;
  float: left;
  height: 100vh;
  min-height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
}
.big-text {
    font-size: 5.5vw;
    line-height: 1.2;
    font-weight: 700;
    letter-spacing: -0.04em;
    word-break: break-word;
    color: #FF424D;
    white-space: nowrap;
    cursor: pointer;
}

.content-sector {
  /* padding-right: 0px; */
  padding-top: 15.625vw;
  padding: 15.625vw 6.25vw 6.25vw;
  overflow-y: scroll;
}

.content-sector-noscroll {
  padding-top: 15.625vw;
  padding: 15.625vw 6.25vw 6.25vw;
  overflow-y: hidden;
}

.button {
    display: inline-block;
    padding: 0.75em 1em;
    font-size: 1rem;
    line-height: 1;
    border: 1px solid black;
    color: black;
    font-family: 'Brown Web', 'Avenir Next', 'Avenir', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    margin-bottom: 0.35rem;
    margin-right: 1rem;
}
.button:hover {
    color: #121E23;
    border-color: #FFF8E7;
    background: #FFF8E7;
}
.about-label {
    font-family: 'Brown Web', 'Avenir Next', 'Avenir', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1;
    letter-spacing: 0.02em;
    text-transform: lowercase;
    font-variant: small-caps;
    margin-bottom: 2rem;
    text-align: center;
    text-shadow: white -1px 0, white -2px 0, white -3px 0, white -4px 0, white -5px 0, white -6px 0, white -7px 0, white 1px 0, white 2px 0, white 3px 0, white 4px 0, white 5px 0, white 6px 0, white 7px 0;
    background-image: linear-gradient(black, black);
    background-position: 0% 50%;
    background-repeat: repeat-x;
    background-size: 1px 1px;
}
.follow-btn {
  left: 50%;
  transform: translateX(-50%);
}
.team {
  margin-top: -2px;
  margin-left: -3px;
  margin-right: -3px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.team-member {
    box-sizing: border-box;
    width: 33.33%;
    padding: 0.8rem 1rem;
    position: relative;
    z-index: 1;
}
.member-photo {
    width: 100%;
    padding-bottom: 100%;
    border-radius: 50%;
    height: 0;
    background-size: cover;
}
.member-name {
  font-size: 1.1rem;
  line-height: 0.9;
  text-align: center;
  margin: 0.25rem 0;
}
.member-role {
  display: block;
  color: #FF424D;
  text-align: center;
  margin-top: 0;
  font-size: 0.75rem;
}

.half-student-intro {
  color: white;
}
.big-style-text {
  font-size: 2.8rem;
  font-family: "Gilroy",Helvetica,Arial,sans-serif;
  line-height: 3.9rem;
}
.highlight-red {
  background:#DE2826;
  color: #181717;
}
.people-grid {
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 3.125vw;
  grid-row-gap: 3.125vw;
}
.student-grid {
  cursor: pointer;
}
.student-box header .inner {
  position: relative;
  width: 100%;
  height: 100%;
}
.student-box header .inner .student-meta {
  position: absolute;
  bottom: 0;
}
.student-box header .inner h4 {
  color: #181717;
  margin: 0 0 10px 0;
  font-size: 1.3em;
  font-weight: 800;
}
.student-box header .inner span {
  color: #F5F5EB;
  font-weight: 800;
  font-size: 1em;
}
.student-box::after {
  content: '';
  display: block;
  padding-bottom: 100%;
}
.student-box header {
  text-align: center;
  cursor: pointer;
}
.student-box:hover header{
  transform: translate(0, 0);
  transition-delay: 0s;
  display: block;
}
.people-grid header {
  position: absolute;
  transform: translate(-100%, 0);
  background: #DE2826;
  height: 100%;
  padding: 26px;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: flex-end;
  font-family: "Gilroy",Helvetica,Arial,sans-serif;
  font-weight: 800;
  transition-delay: 0.4s;
  float: left;
  display: none;
}
.student-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.inner-content {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}


</style>
