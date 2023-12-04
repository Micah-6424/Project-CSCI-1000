export default function examplePage() {
    return (
      <div className='container'>
        <title>Micah Gagerman</title>
        <link rel='icon' href='/favicon.ico' />

        <div idName="top">
        <h1>Hey, My name is Micah Gagerman 😊</h1>
        <hr/>   
        <main className="main">
            <div idName="left_container">
                <p>I am a sophomore majoring in Computer Science. I also have a minor in Creative Technology and Design. I like to spend my free time playing video games, going out with friends and programming. I really like web development and would like to get better at it!</p>
            </div>
            <div id="right_container">
                <img src="me.png" alt=""/>
                <p>Picture of me lol</p>
            </div>

        </main>
        </div>
        <style jsx>{`
        h1 {
            margin-top: 0;
            padding-top: 2rem;
            text-align: center;
            font-weight: bold;
        }
        body {
            margin: 0;
            padding: 0;
            background-color: #FF9F1C;
            font-family: Georgia, 'Times New Roman', Times, serif
        }

        #top {
            
            background-color: #2EC4B6;

        }

        #left_container {
            width: calc(45% - 2em);
            background-color: #FFBF69;
            display: inline-block;
            margin: .5em;
            padding: 1em;
            font-size: 4ch;
            border-radius: 10px;
        }
        #right_container img {
            width: 400px;
            padding-bottom: 0;
            margin-bottom: 0;
        }

        #right_container {
            position: absolute;
            display: flex;
            bottom: .25em;
            right: .25em;
            width: calc(45% - 2em);
            background-color: rgb(144, 101, 165);
            display: inline-block;
            margin: .3em;
            padding: .5em;
            font-size: 4ch;
            border-radius: 10px;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            text-align: center;
        }

        img {
            width: 50%;
        }

        hr {
            border: 10px dotted #CBF3F0;
            border-bottom: 0;
        }
        `}</style>
      </div>
    );
}