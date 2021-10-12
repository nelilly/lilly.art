import { 
  funHouse,
  list,
  masonry,
  offset,
  spread,
  summary,
} from './style.module.css';

const FunHouse = () => {

  return (
    <>
      <section className={funHouse}>
        <h2>The Dilettante’s Corner</h2>
        <p>I wanted to be a professional dabbler but I just never could stick with it.</p>
        <article>
          <h3>A Zine Scene</h3>
          <p>Online magazines designed, developed, edited, and published by N.E.Lilly.</p>
          <div className={spread}>
            <section>
              <img src="/images/development/2020-spacewesterns-v3_shard.jpg" alt="" />
              <h4>Space Westerns Magazine</h4>
              <p>A magazine devoted to Space Westerns.</p>
            </section>
            <section>
              <img src="/images/development/2009-everydayweirdness_shard.webp" alt="" />
              <h4>Everyday Weirdness</h4>
              <p>Weird flash fiction published daily.</p>
            </section>
            <section>
              <img src="/images/development/2008-thaumatrope_shard.webp" alt="" />
              <h4>Thaumatrope</h4>
              <p>The first twitter fiction magazine.</p>
            </section>
          </div>
        </article>
        <article className={list}>
          <h3>Articles</h3>
          <article>
              <img src="/images/dilettante/bat-durston-strange-horizons.png" alt="" />
              <div>
                <h4>The Emancipation of Bat Durston</h4>
                <p><a href="http://strangehorizons.com/non-fiction/articles/the-emancipation-of-bat-durston-or-im-from-iowa-i-only-work-in-outer-space/">The Emancipation of Bat Durston, or: “I’m from Iowa, I Only Work in Outer Space”</a> was the magnum opus of the editorial work on <a href="http://www.spacewesterns.com/">Space Westerns Magazine</a> and appeared on Strange Horizons Magazine. It offered an examination of the Space Western genre and its history from some of the earliest science fiction stories to the modern day.</p>
              </div>
          </article>
          <article className={list}>
              <img src="/images/dilettante/science-fiction-trails-3.jpg" alt="" />
              <div>
                <h4>The Allegory of the Cave (and the Aliens Found Within)</h4>
                <p>Appearing in issue #3 of <em>Science Fiction Trails</em>, “The Allegory of the Cave (and the Aliens Found Within)” was written to answer why stories about aliens in caves in the Western United States was a fequently encountered trope, and why the trope existed in the first place. The article delved into the Richard Sharpe Shaver mystery series of fiction that originally appeared in <em>Amazing Stories</em> in the 40s and aligned with early UFO phenomena and mythology.</p>
              </div>
          </article>
        </article>
        <article>
          <h3>Mummy Unwrapping</h3>
          <div className={offset}>
            <section>
              <p>The Ancient Egyptians didn’t just wrap the mummy in plain cloth; Secreted away in the wrappings were perfumes, religious scriptures, trinkets, and jewelry. In this reenactment of a barbaric Victorian event guests take their turns unwrapping the bandage, to uncover exotic prizes to take home.</p>
              <img src="images/dilettante/mummy-peel.png" alt="Items wrapped into the mummy could be anything: a coupon, a candy, a perfume sample, a pair of earrings, a tea bag sample." />
            </section>
            <section>
              <img src="images/dilettante/mummy-mache.png" alt="The mummy was made with a PVC frame wrapped in paper-maché." />
              <img src="/images/dilettante/mummy-guys.png" alt="A friend and I were the event hosts." />
            </section>
          </div>
        </article>
        <article className={summary}>
            <div>
              <img src="/images/dilettante/werewolf-abridged.png" alt="" />
              <h3>Werewolf Abridged</h3>
              <p>A printable one page summary of the classic party game <strong>Werewolf</strong>, based on the rules as explained by Andrew Plotkin.</p>
              <a href="http://everydayweirdness.com/m/20090311/werewolf.pdf" aria-label="Download Werewolf Abridged PDF">Download PDF</a>
            </div>
            <div style={{backgroundColor: 'var(--color-light-faded)', backgroundImage: 'url(/images/dilettante/werewolf-abridged.png)', backgroundPosition: 'center -6.6rem', backgroundSize: 'cover', borderRadius: '.3rem', filter: 'contrast(20%)', transform: 'scaleX(-100%)'}}></div>
        </article>
        {/* 
          The Unwrapping of a Mummy by Theophile Gautier
          The Difficulties of Writing a Novel (in a Zeppelin Fortress) by Jens Rushing
        */}
        <article>
          <h3>Meme-o-sphere</h3>
          <p>Memes I made, with no explanation offered.</p>
          <div className={masonry}>
            <img src="/images/dilettante/memes/stone-age-social-media.jpg" alt="I‘m so glad I grew up before cave paintings. I did so much stupid stuff and there‘s no record of it anywhere." />
            <img src="/images/dilettante/memes/big-conspiracy.jpeg" alt="In 1988 a young inventor name Josh Baskins proposed a digital comic format that would have revolutionized the Comics Industry. He inexplicably disappeared. Marvel and DC refuse to comment." />
            <img src="/images/dilettante/memes/the-explained.jpg" alt="A world that can be explained even with bad reasons is a familiar world. But, on the other hand, in a universe suddenly divested of illusions and lights, man feels an alien, a stranger. His exile is without remedy since he is deprived of the memory of a lost home or the hope of a promised land. - Albert Camus" />
            <img src="/images/dilettante/memes/amazon-xmas.jpg" alt="A Christmas tree made of Amazon packages." />
            <img src="/images/dilettante/memes/ligatures.png" alt="Who thought it was a good idea to put ligatures in a monotype?" />
            <img src="/images/dilettante/memes/philosophize.jpeg" alt="One interesting thing to consider about even the most brilliant people that have ever lived is that many of them spend years of their lives in a state of confusion... about what would eventually become their area of expertise. - Stephen West, Philosophize This podcast" />
            <img src="/images/dilettante/memes/spock.jpg" alt="Old Spock, New Spock, Red Spock, Blue Spock." />
            <img src="/images/dilettante/memes/no-wheels.jpeg" alt="Never Use Wheels!!! 1. The kill jobs. 2. Wheels don't contribute to payroll taxes. 3. The are really not that convenient." />
            <img src="/images/dilettante/memes/stone-age-technology.jpg" alt="If you haven‘t used these you can‘t fully appreciate todayæs technology." />
            <img src="/images/dilettante/memes/cosplay-simon.jpg" alt="Cosplay. Cosplayer. Character." />
            <img src="/images/dilettante/memes/new-colossus.jpg" alt="The New Colossus by Emma Lazarus. Not like the brazen giant of Greek fame, &#13; With conquering limbs astride from land to land; &#13; Here at our sea-washed, sunset gates shall stand &#13; A mighty woman with a torch, whose flame &#13; Is the imprisoned lightning, and her name &#13; Mother of Exiles. From her beacon-hand &#13; Glows world-wide welcome; her mild eyes command &#13; The air-bridged harbor that twin cities frame. &#13; “Keep, ancient lands, your storied pomp!” cries she &#13; With silent lips. “Give me your tired, your poor, &#13; Your huddled masses yearning to breathe free, &#13; The wretched refuse of your teeming shore. &#13; Send these, the homeless, tempest-tost to me, &#13; I lift my lamp beside the golden door!”" />
            <img src="/images/dilettante/memes/museums.jpeg" alt="Go to the museums. Art is not forever." />
            <img src="/images/dilettante/memes/banana-good-enough.jpeg" alt="Your Art is good enough." />
            <img src="/images/dilettante/memes/banana-tank-police.jpeg" alt="The combination of art and money has produced works of immense value but the slightest alteration renders the priceless work of art worthless. This means that vast sums of money are spent on what must inevitably become junk. - Dominion Tank Police" />
            <img src="/images/dilettante/memes/livejournal-geocities-myspace-www.jpeg" alt="LiveJournal Geocities MySpace WWW" />
            <img src="/images/dilettante/memes/car-launch.jpeg" alt="We were somewhere around GSO, on the edge of the atmosphere, when the drugs began to take hold." />
            <img src="/images/dilettante/memes/liberty-gritty.jpeg" alt="LibertyJS: JavaScript the Philadelphian Way. Philadelphia 2019. " />
            <img src="/images/dilettante/memes/nelilly-2010-2017.jpg" alt="Me in 2010. Me in 2011. Me in 2012. Me in 2013. Me in 2014. Me in 2015. Me in 2016. Me in 2017. " />
            <img src="/images/dilettante/memes/fight-me.jpg" alt="The First Rule of Fight Club was meant to be broken. Fight Me." />
            {/* <img src="/images/dilettante/memes/i-added-text.jpg" alt="I added text to this screencap so now it’s inspirational." /> */}
          </div>
        </article>
      </section>
    </>
  );
};

export default FunHouse;
