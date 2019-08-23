<template>
  <div>
    <div class="content-sector">
      <div class="container">
        <h1>NTHU</h1>
        <h1>Experimental Education Program</h1>
        <h2 class="mt-4">Introduction to program</h2>
        <h6
          class="mt-4"
        >For exceptional students who wish to tackle their areas of academic interest with an interdisciplinary approach for greater depth of understanding, NTHU offers an Experimental Education program designed to meet their needs. As the traditional boundaries between the sciences and humanities are subjected to increasing scrutiny and criticism, the program acts as an alternative to the narrow foci most majors provide. Through the Experimental Education program, students who believe the current academic frameworks insufficient for them to pursue specific issues or questions that they would like to explore will be allowed to design their own majors and, in turn, learning plans. Students who opt into this challenging program must have an extremely clear vision of what they want to study and how they plan on pursuing their degrees, which is typically designed by combining multiple majors or selecting nuances in general</h6>
        <h2 class="mt-4">Program Overview</h2>
        <h4 class="mt-3">Individual Learning Advisory Committee system</h4>
        <h6 class="mt-3">
          Program participants will form Individual Learning Advisory Committees, each with a maximum of five students, which will be
          <br />
          <br />1. Led by an NTHU instructor who must be experts in the students’ field of interest
          <br />
          <br />2. Aided by 2 to 4 instructors (industrial professionals included) from either NTHU or other schools also within the field of interest
          <br />
          <br />Students’ curricula can include courses in a classroom setting, nontraditional courses, internships outside of school, and international study-abroad programs.
        </h6>
      </div>
    </div>
    <img src="https://tcp-prod.s3.amazonaws.com/images/trellov4.width-3000.jpg" />
    <div class="content-sector">
      <div class="container">
        <h2 class="mt-4">Graduation Requirements</h2>
        <h6 class="mt-4">
          In order to meet graduation requirements, students within the Experimental Education program must complete the following by the end of their senior year:
          <ul>
            <li>Achieve all the required credits as well as fulfill the minimum number of credits ordained by the Ministry of Education (for further information, please visit the Division of Curriculum)</li>
            <li>Complete the course curriculum approved by the Learning Review Committee</li>
            <li>Complete the capstone project, which will be graded by the Learning Review Committee</li>
            <li>If necessary, organize their own project exhibitions</li>
            <li>Provide the Tsing Hua Interdisciplinary Program with the results of their capstone project for future reference</li>
            <li>If a student decides to extend his/her studies, he/she can extend them for no more than 2 years</li>
          </ul>
        </h6>
        <h2 class="mt-4">Graduation Requirements</h2>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    const header = document.getElementById('header'); // 第二个命令台输出的结果
    header.style.color = '#2d4a57';
  },
};
</script>
<style scoped>
html,
body {
  background: #fff;
  color: #2d4a57;
}
* {
  color: #2d4a57;
}
h1,
h2,
h3,
h4 {
  font-weight: 700;
}
h1 {
  font-size: 4rem;
}
.content-sector {
  /* padding-right: 0px; */
  padding-top: 15.625vw;
  padding: 15.625vw 6.25vw 6.25vw;
  overflow-y: scroll;
}
</style>
