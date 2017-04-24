+++
menu = "main"
title = "Construction Notes"
description = "Notes on the construction of the language"
date = "2017-04-14"
+++
# Phonology

## Vowels

I'm thinking a 4-vowel system here, with no fancy vowel harmony and things,
just these:

 - /a/ open front unrounded
 - /e/ mid front unrounded
 - /o/ mid back rounded
 - /i/ close front unrounded

I was thinking maybe some vowel nasalization when in close proximity to the nasals?
But I'm kind of not liking the sound it makes for this language. Maybe in a child 
language, when I start doing that sort of thing.

No diphthongs allowed here, and I've yet to think about prosody, sooo lengthening is
still a big question mark (question markers are also not there yet).

## Consonant Inventory

|               | Bilabial | Linguolabial | Post-alveolar | Palatal | Uvular |
| ------------- | :------: | :----------: | :-----------: | :-----: | :----: |
| Stop          |          |              |               |         |    ʔ   |
| Nasal         |    m     |              |       n       |         |        |
| Tap/Trill     |          |              |       r       |         |        |
| Fricatives    |   ɸ, β   |     θ̼, ð̼     |     ʃ,  ʒ     |         |    χ   |
| Approximants  |          |              |       j       |         |        |

### Stops

>The orferi, the beings who speak orferithri, have two primary differences in
>comparison to humans in terms of speech articulators: their lips are rigid
>and are not airtight, and they do not have teeth. In practice, this seems to be
>equivalent to having their "labials" and "dentals" functionally merged together.
>A notable consequence of this sort of anatomy is that it is generally impossible 
>for the orferi to produce a bilabial stop. In this reference grammar, we use the
>stem "labial" to describe this articulator despite their difference from human lips. 

Ok so, I thought of this quite a while ago, before I've had a lot of reading done--aaand
I'm kind of questioning whether or not gaps/breaks in a rigid "lips" of these things would
be enough for bilabial stops not to happen. Unless of course, these are more significant


While it is quite possible for the orferi to produce stops in other positions (the 
bilabial ones could be easily replaced with linguolabials), with the notable exception
of the uvular stop, it seems that the orferithri language does not incorporate these 
sounds in its phonology.

#### Uvular Stops 

Uvular stops /ʔ/ are quite rare in the orferithri lexicon. They only occur on the onset 
of the initial syllable, then is often lenited to a /χ/ if a prefix is added to the stem,
with the exception of a few dialects.

<dl>
  <dt>/ʔiro-/</dt>
  <dd>non-existent</dd>
  <dt>/ʔiroma/</dt>
  <dd>zero</dd>
</dl>

<div class="orferi-gloss" data-gloss>
  <p>jaχiro θereno momoθanoje</p>
  <p>ja- ʔiro- θere -no momoθa -no -je</p>
  <p>HSY- NEGEXIST- father -NOM momoθa -NOM -OBJ</p>
  <p class="gloss__line--free">I heard, Momotha has no father.<p>
</div> 

### Nasals

There are some dialects in which nasal onsets are merged into a lengthened nasalized 
nuclear vowel, but by and large, the most common dialect of the  language have distinct
nasal syllable-initial nasal consonants /m/ and /n/.

### Trill

The post-alveolar trill /r/ is very common in the language, as it is used in affixes in the 
tense system. Some dialects have weakened the sound into the voiceless post-alveolar 
approximant /j/ in some cases, especially if the syllable in which it occurs is 
word-internal.

### Fricatives

Fricatives available in orferithri are the voiced and voiceless bilabials, /ɸ/ and /β/,
the voiced and voiceless post-alveolars /ʃ/ and /ʒ/, and the voiced and voiceless 
linguolabials /θ̼/ and /ð̼/. 

The bilabial fricatives /ɸ/ and /β/ along with the post-alveolar fricatives /ʃ/ and /ʒ/ 
are the only coda consonants found in orferithri phonology. It seems they _must_ be 
followed by a _voiced fricative_.

### Approximants

## Phonotactics

## Verbs

At the moment, I am of a mind that most, if not all, lexical items in the language are 
a verb of some sort, or at least stems, with default markings and meanings be more verb-like
than any other part of speech. Nouns and adjectives are then formed by other morphological 
processes.

Also, I want to have some sort of trigger system, Austronesian alignment-style in this language
and I will try to get that into the sort of agglutinative/synthetic (not really clear on the 
difference between the two as of yet) morphology I have.

Default form of a stem is a *_stative_* form (verb that describes the current state of the subject).
Statives are usually intransitive, and thus takes only one argument.


### Some stems

Listing these here for ease of access. I will probably define a YAML document or something
that would properly have example sentences and proper definitions and senses for these words:

<dl>
  <dt>raβo</dt>
  <dd>to understand</dd>
  <dd>to be empathetic</dd>
  <dd>to build (a structure)</dd>
  <dt>θere</dt>
  <dd>to be a father</dd>
  <dd>to be a paternal ancestor</dd>
  <dt>βa</dt>
  <dd>to drink</dd>
  <dd>to be soaked in a liquid</dd>
  <dt>eʒi</dt>
  <dd>to ferment</dd>
  <dd>to be turned into wine</dd>
  <dt>ɸero</dt>
  <dd>to be born</dd>
  <dd>to sprout</dd>
  <dd>to be a child</dd>
  <dt>ʃiʃi</dt>
  <dd>to work</dd>
  <dd>to farm a field</dd>
  <dd>to raise an army</dd>
  <dt>ɸaχa</dt>
  <dd>to feel exhaustion</dd>
  <dd>to toil</dd>
  <dt>θiθi</dt>
  <dd>to incessantly speak</dd>
  <dd>to cause a ruckus</dd>
  <dd>to nag</dd>
  <dt>riʃβa</dt>
  <dd>the sun</dd>
  <dd>to shine</dd>
  <dd>to project light</dd>
  <dd>to be the center of attention</dd>
  <dt>?orɸe</dt>
  <dd>to wake</dd>
  <dd>to be sentient</dd>
  <dd>to be a person</dd>
  <dt>θoða</dt>
  <dd>to be repeated</dd>
  <dt>θana</dt>
  <dd>to intensify</dd>
  <dd>to be powerful</dd>
  <dt>majo</dt>
  <dd>to float</dd>
  <dt>?arɸe<dt>
  <dd>tomorrow</dd>
</dl>

# Test sentences

<div class="orferi-gloss" data-gloss>
  <p class="gloss__line--free">riʃβa riʃβano</p>
  <p>riʃβa riʃβa -no</p>
  <p>shine shine -NOM</p>
  <p class="gloss__line--free">The sun shines.</p>
</div>

<div class="orferi-gloss" data-gloss>
  <p class="gloss__line--free">ririʃβa riʃβano</p>
  <p>ri~ riʃβa riʃβa -no</p>
  <p>DUR~ shine shine -NOM</p>
  <p class="gloss__line--free">The sun is shining.</p>
</div>

<div class="orferi-gloss" data-gloss>
  <p class="gloss__line--free">ariʃβa riʃβano</p>
  <p>a- riʃβa riʃβa -no</p>
  <p>PST- shine shine -NOM</p>
  <p class="gloss__line--free">The sun shone.</p>
</div>

<div class="orferi-gloss" data-gloss>
  <p class="gloss__line--free">ʔeriʃβa riʃβano</p>
  <p>ʔe- riʃβa riʃβa -no</p>
  <p>FUT- shine shine -NOM</p>
  <p class="gloss__line--free">The sun will shine.</p>
</div>

<div class="orferi-gloss" data-gloss>
  <p class="gloss__line--free">ʔaraθiʃβa riʃβano</p>
  <p>ʔa- r&lt;aθ&gt;iʃβa riʃβa -no</p>
  <p>PST- &lt;PROG&gt;shine shine -NOM</p>
  <p class="gloss__line--free">The sun has been shining.</p>
</div>

<div class="orferi-gloss" data-gloss>
  <p class="gloss__line--free">ʔaχeraθiʃβa riʃβano</p>
  <p>ʔaχe- r&lt;aθ&gt;iʃβa riʃβa -no</p>
  <p>aɡain- &lt;PROG&gt;shine shine -NOM</p>
  <p class="gloss__line--free">The sun is shining again.</p>
</div>

<div class="orferi-gloss" data-gloss>
  <p class="gloss__line--free">ʔeramiʃβa riʃβano χarɸenoβi</p>
  <p>ʔe- r&lt;am&gt;iʃβa χarɸe -no riʃβa -no -βi</p>
  <p>FUT- &lt;ACTFOC&gt;shine tomorrow -NOM shine -NOM -SBJ</p>
  <p class="gloss__line--free">The sun will shine tomorrow.</p>
</div>

<div class="orferi-gloss" data-gloss>
  <p class="gloss__line--free">ʔeriʃβa χarɸeno riʃβanoye</p>
  <p>ʔe- riʃβa χarɸe -no riʃβa -no -ye</p>
  <p>FUT- shine tomorrow -NOM shine -NOM -OBJ</p>
  <p class="gloss__line--free">Tomorrow, the sun will shine.</p>
</div>
