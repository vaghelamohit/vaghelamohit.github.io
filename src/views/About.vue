<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
  <div>
    Hello, I am <strong>Mohit Vaghela</strong>.<br/>
    I have 10 years of experience in Unity game development, mainly focused on mobile games.<br/>
    My key skills include designing gameplay mechanics, optimizing performance for mobile devices, and building multiplayer features.<br/>
    I have also worked on player engagement systems such as missions, tournaments, and battle passes.<br/>
    In addition to development, I have guided junior developers and supported my team.<br/>
    I am now looking for a <strong>Senior Unity Developer</strong> role where I can share my knowledge, support the team, and create engaging games.
  </div>
</div>

    <div class="photo">
      <img :src="`img/avatar.png`" alt="Avatar of John" /> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

</style>