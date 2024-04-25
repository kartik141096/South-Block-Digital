import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { CommonModule } from '@angular/common';

interface news {
  id: string;
  category_id: string;
  heading: string;
  paragraph: string;
  img: string;
  is_active: string;
  is_deleted: string;
  created_by: string;
  created_at: string;
  slaves: string[][];
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(protected ApiService: ApiService) {}

  news_data:news[] = [];

  ngOnInit(): void {

    this.ApiService.get_news_list().subscribe(data => {
      // console.log(data);
      this.news_data = data;
      console.log(this.news_data[0].id);
    }, error => {
      console.error(error);
    });


  }
  
  ngAfterViewInit() {

    $(document).ready(() => {
      this.getHoro(1);
    });
}

  capricornFortune = "Your position in your social circle is about to skyrocket, so get ready! You've got the connections and the ideas to make your friends amazingly happy right now, and they know it! So have a little bit more faith. You are still very much loved by your friends! They will prove it to you soon enough when they start calling about what to do next weekend. It's time to pull out that plan you've had in your back pocket -- you know, the one that you think they'll never go for? This time, they will."
  aquariusFortune = "People who do not realize what they are doing will exert a major influence over your day, so you need to stay extra-aware if you want to keep your cool right now. The drivers next to you? They're all chatting away on their cell phones, oblivious to the fact that their left turn signal has been on for ten miles. Zen it out. Don't let it get to you. Just keep your distance from clueless folks and realize that they will get their just desserts. Focus on what you're doing all the more."
  ariesFortune = "Your level of artistic inspiration is very high today, Aries. Dreams or meditation may have brought up some spiritual insights and revelations for you, and you may have promptly forgotten them upon coming out of your dream or meditative state. This could prove very frustrating for you! Try writing them down even if you only remember snatches. This can actually bring them to the surface again. You'll want a record of them anyway."
  taurusFortune = "A delivery of some kind that you were expecting to come from far away might be delayed, causing you to wonder if it might have been lost. It hasn't, Taurus; it's just delayed. Unfortunately, there isn't much you can do but wait. Equipment you use on the job could go out of whack today, necessitating calling in a repairman. This could set your work back some and make you a bit antsy. Try to find something else to do!"
  geminiFortune = "Today you're likely to be feeling especially passionate, sexy, and desirous of a romantic encounter, Gemini. You might even have a hot date scheduled. However, don't be surprised if it has to be postponed for reasons beyond the control of either you or your partner. If you can't do otherwise, you might try to sublimate those feelings through creative activities. Engrossing novels and movies could also prove a good outlet, although never as good as the real thing!"
  cancerFortune = "A female visitor who might have a few problems might come to your door wanting advice and sympathy, Cancer. She could have some other news that could come as a shock to you. A crisis on the job might make it necessary for you or your partner to spend most of the time today away from home and family. This could be frustrating, particularly if you have to cancel your plans. Hang in there!"
  leoFortune = "Tasks of any kind are all likely to seem like the labors of Hercules today, Leo. Overwork and nerve strain could have you feeling a little bit under the weather today, and it might be a good idea for you to take some time alone to rest. If you can't do that, at least try to take things easy. Some unexpected changes in your community might have your neighbors' tongues wagging. Be sure to check out the facts before jumping to any conclusions."
  virgoFortune = "Money matters might be weighing on the mind of a close friend or lover and your advice could be sought. A creative project of some kind may require a larger expenditure of money, time, or other resources than you originally thought, and this could have you wondering if you'll be able to continue with it. It might take a little corner cutting on your part, Virgo, but you should be able to complete it as planned."
  libraFortune = "You might have visitors, Libra, or even a hot date scheduled for tonight, but by mid-afternoon you might be feeling too tired to go through with it and wondering if you should cancel. It's best to keep your activities low key. Have coffee and snacks at home instead of going out, and get the snacks from the store! Your evening is likely to be full of exciting and stimulating conversations, so you'll be glad you stuck with your plans."
  scorpioFortune = "Deliveries you may be expecting could be delayed or held up. Today you might learn something shocking about a neighbor or relative, and gossip might spread very rapidly through your community. This could have you reeling even though it might be exaggerated. You could pay visits to a few people nearby, Scorpio, or spend a lot of time on the phone trying to learn the truth. Don't take anything you hear today at face value."
  sagittariusFortune = "Some good but surprising news about a group with which you may be affiliated could come your way today, Sagittarius. Perhaps fundraising activities have been more successful than you thought, or perhaps recognition is coming your way. A lot of paperwork may have to be completed before this can be made to work for you, however. Contracts or other legal papers might be involved. In the evening, go out with your friends and celebrate."
  piscesFortune = "Today may start out being a very frustrating day, Pisces. Be prepared! Some equipment with which you work might suddenly go out of order and it could take a while to get it fixed. A temporary separation from a romantic partner could also be disappointing. You may have a lot of physical energy for which you have little immediate outlet. Take a long walk. This could not only provide an energy outlet but clear your head as well."

  getHoro(x:number) {
    
    var zodiac = document.getElementById('zodiac')
    var fortune = document.getElementById('fortune')
    
    var a = document.getElementById('1')
    var b = document.getElementById('2')
    var c = document.getElementById('3')
    var d = document.getElementById('4')
    var e = document.getElementById('5')
    var f = document.getElementById('6')
    var g = document.getElementById('7')
    var h = document.getElementById('8')
    var i = document.getElementById('9')
    var j = document.getElementById('10')
    var k = document.getElementById('11')
    var l = document.getElementById('12')

    if(a && b && c && d && e && f && g && h && i && j && k && l ){
      a.classList.remove("cool-hover-active");
      b.classList.remove("cool-hover-active");
      c.classList.remove("cool-hover-active");
      d.classList.remove("cool-hover-active");
      e.classList.remove("cool-hover-active");
      f.classList.remove("cool-hover-active");
      g.classList.remove("cool-hover-active");
      h.classList.remove("cool-hover-active");
      i.classList.remove("cool-hover-active");
      j.classList.remove("cool-hover-active");
      k.classList.remove("cool-hover-active");
      l.classList.remove("cool-hover-active");
    }

    
    if (zodiac && fortune) {
      
      if(x === 1){
        zodiac.innerHTML = "Pisces"
        fortune.innerHTML = this.piscesFortune
        var activeElement = document.getElementById('1');
        if(activeElement)
          activeElement.classList.add("cool-hover-active");

      }else if(x === 2){
        zodiac.innerHTML = "Aquarius"
        fortune.innerHTML = this.aquariusFortune
        var activeElement = document.getElementById('2');
        if(activeElement)
          activeElement.classList.add("cool-hover-active");

      } else if(x === 3){
        zodiac.innerHTML = "Capricorn"
        fortune.innerHTML = this.capricornFortune
        var activeElement = document.getElementById('3');
        if(activeElement)
          activeElement.classList.add("cool-hover-active");


      } else if(x === 4){
        zodiac.innerHTML = "Sagittarius"
        fortune.innerHTML = this.sagittariusFortune
        var activeElement = document.getElementById('4');
        if(activeElement)
          activeElement.classList.add("cool-hover-active");


      } else if(x === 5){
        zodiac.innerHTML = "Scorpio"
        fortune.innerHTML = this.scorpioFortune
        var activeElement = document.getElementById('5');
        if(activeElement)
          activeElement.classList.add("cool-hover-active");


      } else if(x === 6){
        zodiac.innerHTML = "Libra"
        fortune.innerHTML = this.libraFortune
        var activeElement = document.getElementById('6');
        if(activeElement)
          activeElement.classList.add("cool-hover-active");


      } else if(x === 7){
        zodiac.innerHTML = "Virgo"
        fortune.innerHTML = this.virgoFortune
        var activeElement = document.getElementById('7');
        if(activeElement)
          activeElement.classList.add("cool-hover-active");


      } else if(x === 8){
        zodiac.innerHTML = "Leo"
        fortune.innerHTML = this.leoFortune
        var activeElement = document.getElementById('8');
        if(activeElement)
          activeElement.classList.add("cool-hover-active");


      } else if(x === 9){
        zodiac.innerHTML = "Cancer"
        fortune.innerHTML = this.cancerFortune
        var activeElement = document.getElementById('9');
        if(activeElement)
          activeElement.classList.add("cool-hover-active");


      } else if(x === 10){
        zodiac.innerHTML = "Gemini"
        fortune.innerHTML = this.geminiFortune
        var activeElement = document.getElementById('10');
        if(activeElement)
          activeElement.classList.add("cool-hover-active");


      } else if(x === 11){
        zodiac.innerHTML = "Taurus"
        fortune.innerHTML = this.taurusFortune
        var activeElement = document.getElementById('11');
        if(activeElement)
          activeElement.classList.add("cool-hover-active");


      } else if(x === 12){
        zodiac.innerHTML = "Aries"
        fortune.innerHTML = this.ariesFortune
        var activeElement = document.getElementById('12');
        if(activeElement)
          activeElement.classList.add("cool-hover-active");


      } 
    }
  }

}

