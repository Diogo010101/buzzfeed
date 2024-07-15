import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import quizz_questions from '../../../assets/data/quizz_questions.json'

@Component({
  selector: 'app-quizz',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css'
})
export class QuizzComponent implements OnInit{
  title:string = ""
  questions:any
  questionSelected:any

  answers:string[] = []
  answerSelected:string = ""

  questionIndex:number = 0
  questionMaxIndex:number = 0

  finished:boolean = false
  closeQuestions:boolean = true

  aboutChoose: string = ""

  imagem: string = ""

  loja: string = ""
  linkDeCompra: string = ""

  audioIntro: string = ""


  ngOnInit(): void {
    this.finished = true;

    if(quizz_questions)
    this.finished = false
    this.title = quizz_questions.title

    this.questions = quizz_questions.questions
    this.questionSelected = this.questions[this.questionIndex]

    this.questionIndex = 0
    this.questionMaxIndex = this.questions.length
    console.log(this.questionSelected)



    
  }

  playerChoose(value:string){
    this.answers.push(value)
    this.nextStap()

  }

  async nextStap(){
    this.questionIndex +=1
    if(this.questionMaxIndex > this.questionIndex){
      this.questionSelected = this.questions[this.questionIndex]

    }else{
      const finalAnswer:string = await this.checkResult(this.answers)
      this.finished = true
      this.closeQuestions = false
      this.answerSelected = quizz_questions.results[finalAnswer as keyof typeof quizz_questions.results]
      console.log(this.answers)
      if (finalAnswer === "A") {
        this.aboutChoose = "O Playstation 5 oferece uma experiência de jogo imersiva com gráficos 4K e 8K, SSD ultrarrápido, áudio 3D e controle inovador, além de jogos exclusivos aclamados pela crítica. No entanto, o preço elevado, a disponibilidade limitada e o espaço de armazenamento restrito podem ser fatores a serem considerados antes da compra."
        this.imagem = "../../../assets/imgs/ps5.png"
        this.loja = "AMAZON"
        this.linkDeCompra = "https://www.amazon.com.br/PlayStation%C2%AE5-Slim-Disk-2-Jogos/dp/B0CSPNDPKG/ref=sr_1_12?dib=eyJ2IjoiMSJ9.VHSf-pL6DJobPffg_vwpmCWnGB_GqAQCPFoOR3Ru_VnGgh77Tj0o5c8wdy1ClSwdcngj8nVyvhojRFXqYDDC8gpPn6QTNHvMf3wcvoINUvoItNPJ--XVzhjdNRJ1Tr3OlGQKS00pWDwHqK5-aWEeHxLuuKASXU_My4_q8Tphoh5EPAuKwbp3P7nmDfOziifHn2gDcoWG2vd-YxgCYCQ4VSV695L08VXBIangmI6QDq0.mVakDJoDLSP-5zJnpzEsnwuMlbjYrjqu_OsFIspyXZg&dib_tag=se&qid=1720773859&s=videogames&sr=1-12&ufe=app_do%3Aamzn1.fos.a492fd4a-f54d-4e8d-8c31-35e0a04ce61e"
        this.audioIntro = "../../../assets/audio/ps5-startup-sound-made-with-Voicemod.mp3"
      } else if (finalAnswer === "B") {
        this.aboutChoose = "Xbox Series X e Series S: a nova geração de games da Microsoft! O Series X oferece a experiência mais poderosa, com gráficos 4K / 8K, 120 FPS, ray tracing e SSD ultrarrápido, ideal para quem busca o melhor.Já o Series S, em um design compacto e acessível, entrega gráficos 1440p / 4K, 120 FPS, ray tracing e SSD rápido, perfeito para quem busca custo - benefício.Ambos possuem retrocompatibilidade, controle inovador, Quick Resume e Xbox Game Pass.Escolha o ideal para você e prepare - se para o futuro dos games!"
        this.imagem = "../../../assets/imgs/xbox.png"
        this.loja = "AMAZON"
        this.linkDeCompra = "https://www.amazon.com.br/Microsoft-Console-Xbox-Series-S/dp/B08JN2VMGX/ref=sr_1_2?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3TZ2N39EXVEP9&dib=eyJ2IjoiMSJ9.GyKRq1t-ImRc1eNckjQrkEdu6CcCe05ngToC2EtzK0obzeP1XF-ahKNUeaumdovODUNQviRDVd97hOQ2XqAKRRCsNmUd614LmrUUjDDru-5vHKyAaNXvAiWvE6kDtKeD5ryT07Zjo61nd0u88Fsajsq7VLks3Pwf_yNlwDueQDo3N2kxrlLgoIUOEqs3Aw6Kgl3amJByh64EAG1OoW8Ei9wkW_T2Joz5EryJ0FrBksc.ezddAicrWIi8lbl740C3oQ31KNpJqYaC2CL51hjxPKg&dib_tag=se&keywords=xbox+series+s&qid=1720774745&s=videogames&sprefix=xbox+series+%2Cvideogames%2C167&sr=1-2&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147"
        this.audioIntro = "../../../assets/audio/xbox-series-x-startup-logo-made-with-Voicemod.mp3"
      } else if (finalAnswer === "C"){
        this.aboutChoose = "O Nintendo Switch se destaca pela portabilidade e versatilidade, permitindo jogar em qualquer lugar com títulos famosos como Mario e Zelda.A biblioteca de jogos é um ponto forte, mas os preços podem ser altos.O console oferece diversão em família e com amigos, com controles inovadores, mas o hardware limitado e a durabilidade dos Joy - Cons podem ser pontos negativos.A decisão de compra depende das suas prioridades e do tipo de experiência de jogo que você busca."
        this.imagem = "../../../assets/imgs/Nintendo-Switch.png"
        this.loja = "AMAZON"
        this.linkDeCompra = "https://www.amazon.com.br/Console-Nintendo-Switch-Azul-Vermelho/dp/B0C3DZXD5L/ref=sr_1_1_sspa?adgrpid=127617963115&dib=eyJ2IjoiMSJ9.fKzz-LrPz0MDs1iSa5F8pznGuSghUgEndiBsF68Y1MtJFPqjx5mwqO0kv6mBmmWK32oWDbiQQwnefm7NHN2D6R4HIIxyoUBw0o3ki6ci4boOEvet9ORQHu8__eqTuH7bDL5DoDSOYYW4T4OVivo1hH_4F3PsrhAPYKH4w9Z8w4FZ_b2gS2bx1LWEBvUjfbiSYZBr9eL1B7QMP8PECZWS1hHEw6N417MU1WUyflER8IFD8GaGmdStxMCFpSArZwEHiJWzVxiNdIMBb62ecgl6jlJklOVa1H5M6HFUxcEm2E8.pJs1jRO4-5e1q-sO7ahRZ4FOV38s3-pM3eb9J8WMNNQ&dib_tag=se&hvadid=593184216211&hvdev=c&hvlocphy=9195940&hvnetw=g&hvqmt=e&hvrand=10985770624277574655&hvtargid=kwd-302254787453&hydadcr=17126_13443065&keywords=nintendo+switch+amazon&qid=1720855760&sr=8-1-spons&ufe=app_do%3Aamzn1.fos.95de73c3-5dda-43a7-bd1f-63af03b14751&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1"
        this.audioIntro = "../../../assets/audio/switch-snap-made-with-Voicemod.mp3"
      } else if (finalAnswer === "D") {
        this.aboutChoose = "PCs Gamers reinam em desempenho e personalização, ideal para quem busca a melhor experiência gráfica em jogos.Escolha os componentes que cabem no seu bolso e estilo, mas prepare - se para um investimento inicial alto e a necessidade de conhecimento técnico para montagem e manutenção.A recompensa ? Um universo de jogos vasto, multifuncionalidade e a liberdade de upgrades para acompanhar as últimas tecnologias."
        this.imagem = "../../../assets/imgs/pcgamer.png"
        this.loja = "Pichau"
        this.linkDeCompra = "https://www.pichau.com.br/computador-pichau-gamer-uvall-iv-intel-i5-11400f-geforce-rtx-2070-8gb-16gb-ddr4-ssd-480gb-50066"
        this.audioIntro = "../../../assets/audio/windows-startup-made-with-Voicemod.mp3"
      } else {
        this.aboutChoose = "PCs Portáteis: Leve seus jogos para onde for com desempenho potente e acesso a um universo de títulos. Steam Deck e Zeenix são ótimas opções, mas prepare-se para investir e lidar com bateria limitada, menos poder que um PC gamer tradicional e o conforto de jogar por longas horas. Avalie suas necessidades e prioridades antes de embarcar nessa aventura portátil!"
        this.imagem = "../../../assets/imgs/steam_deck.png"
        this.loja = "AMAZON"
        this.linkDeCompra = "https://www.amazon.com.br/Valve-Steam-Deck-64gb/dp/B0BJPM3CQT/ref=asc_df_B0BJPM3CQT/?tag=googleshopp00-20&linkCode=df0&hvadid=431423537910&hvpos=&hvnetw=g&hvrand=12648064044143280661&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9195940&hvtargid=pla-1938594494292&psc=1&mcid=d1ccdfed36c83ecb8a0bf2057175511e"
        this.audioIntro = "../../../assets/audio/steam-deck-logo-startup-sound.mp3"
      }
    }
    
  }

  async checkResult(answers:string[]){
    const result = answers.reduce((previous, current, i, arr)=>{
      if(
        arr.filter(item => item ===previous ).length >
        arr.filter(item => item === current).length
      ){
        return previous

      }else{
        return current
      }
    })
    return result
  }

  resetAnswers(){
    this.questions = quizz_questions.questions
    console.log(this.questions)

    this.questionIndex = 0
    this.questionMaxIndex = 5
    console.log(this.questionMaxIndex)
    this.answers.splice(5)
    this.closeQuestions = true
    this.finished = false
    console.log(this.questions)
    console.log(this.questionSelected)
    this.questionSelected = this.questions[this.questionIndex]

  }

  


}
