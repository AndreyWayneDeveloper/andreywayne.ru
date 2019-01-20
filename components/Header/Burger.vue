<template lang="pug">
div.burger(@click='toggleMenu' :class='{ burgerActive: burgerBool }')
  div.burger-line.top
  div.burger-line.mid
    p {{ title }}
  div.burger-line.bot
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import $ from 'jquery'
export default {
data () {
    return {
       title: 'Проекты',
    }
  },
  computed: {
    ...mapState([
      'burgerBool'
    ])
  },
  methods: {
    ...mapMutations([
      'burgerBoolFunc'
    ]),
    toggleMenu () {
      this.burgerBoolFunc()
      $('.mid').removeClass('midActive')
    },
    burgerAnimateFunc (isEmpty) {
      var isEmpty = (object) => {
        return JSON.stringify(object) === "{}";
      }

      if (this.$route.path === '/') {
        var wTop = $(window).scrollTop()
        var wHeight = $(window).height()
        
        if (wTop >= wHeight) {
          $('.mid').addClass('midActive')
        } else {
          $('.mid').removeClass('midActive')
        }
      } 
    },
    burgerStateFunc () {
      $(window).on('scroll', this.burgerAnimateFunc)
    }
  },
  mounted () {
    this.burgerStateFunc()
  }
}
</script>

<style lang='less' scoped>
.burger {
  position: fixed;
  right: 7.5vw;
  top: 35px;
  z-index: 1002;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 39px;
  width: 50px;
  cursor: pointer;
}

.burger-line {
  position: relative;
  height: 10px;
  border-radius: 20px;
  background: #30373c;
  margin-bottom: 5px;
  transition: all .4s;
  
  & p {
    opacity: 0;
    position: absolute;
    top: -4px;
    font-family: 'GT Walsheim Pro Medium';
    font-size: 16px;
    text-transform: uppercase;

    @media screen and (max-width:1000px) {
      display: none;
    }
  }
}

.top {
  width: 50px;
}

.mid {
  width: 40px;
}

.bot {
  width: 30px;
  margin-bottom: 0px;
}

.burger:hover .top {
  width: 30px;
}

.burger:hover .bot {
  width: 50px;
}

.midActive {
  margin-right: 115px;
  background: none;
  @media screen and (max-width:1000px) {
    margin-right: 0;
    background: #30373c;
  }

  & p {
    opacity: 1;
  }
}

.burgerActive {
  transition: all .3s;
  
  &:hover .bot,
  &:hover .top {
    width: 30px;
  }

  &:after {
    position: absolute;
    left: 3px;
    top: -9px;
    content: '';
    width: 50px;
    height: 50px;
    border: 2px solid white;
    border-radius: 50%;
    transition: all .4s;
  }

  &:hover:after {
    box-shadow: 0 0 30px white;
  }
  border-radius: 50%;;
  div {
    background: white;
    width: 30px;
    height: 5px;
  }

  .top {
    position: absolute;
    right: 5px;
    top: 16px;
    transform: rotate(45deg);
    transform-origin: center;
  }
  
  .mid {
    display: none;
  }

  .bot {
    position: absolute;
    top: 16px;
    right: 5px;
    transform: rotate(-45deg);
    transform-origin: center;
  }
}
</style>
