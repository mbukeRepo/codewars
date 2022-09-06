<div class="description h-full">
<h3>1. Estimating Amounts of Subsets</h3>
<div class="description-content p-4">
<div class="markdown prose max-w-none mb-8" id="description"><p>Given a set of elements (integers or string characters, characters only in RISC-V) that may occur more than once, we need to know the amount of subsets that none of their values have repetitions.</p>
<p>Let's see with an example:</p>
<pre><code>set numbers = {1, 2, 3, 4}
</code></pre>
<p>The subsets are:</p>
<pre><code>{{1}, {2}, {3}, {4}, {1,2}, {1,3}, {1,4}, {2,3}, {2,4},{3,4}, {1,2,3}, {1,2,4}, {1,3,4}, {2,3,4}, {1,2,3,4}} (15 subsets, as you can see the empty set, {}, is not counted)
</code></pre>
<p>Let's see an example with repetitions of an element:</p>
<pre><code>set letters= {a, b, c, d, d}
</code></pre>
<p>The subsets for this case will be:</p>
<pre><code>{{a}, {b}, {c}, {d}, {a,b}, {a,c}, {a,d}, {b,c}, {b,d},{c,d}, {a,b,c}, {a,b,d}, {a,c,d}, {b,c,d}, {a,b,c,d}} (15 subsets, only the ones that have no repeated elements inside)
</code></pre>
<p>The function <code>est_subsets()</code> (javascript: <code>estSubsets()</code>) will calculate the number of these subsets.</p>
<p>It will receive the array as an argument and according to its features will output the amount of different subsets without repetitions of its elements.</p>
<pre><code class="language-python"><span class="cm-variable">est_subsets</span>([<span class="cm-number">1</span>, <span class="cm-number">2</span>, <span class="cm-number">3</span>, <span class="cm-number">4</span>]) <span class="cm-operator">==</span> <span class="cm-number">15</span>
<span class="cm-variable">est_subsets</span>([<span class="cm-string">'a'</span>, <span class="cm-string">'b'</span>, <span class="cm-string">'c'</span>, <span class="cm-string">'d'</span>, <span class="cm-string">'d'</span>]) <span class="cm-operator">==</span> <span class="cm-number">15</span>
</code></pre>
<p>Features of the random tests:</p>
<pre><code>Low Performance Tests: 40
Length of the arrays between 6 and 15

High Performance Tests: 80
Length of the arrays between 15 and 100 (Python and Ruby) and between 15 and 50 in javascript and Lua
</code></pre>
<p>Just do it!</p>
</div>
<hr>
<div class="mt-4"><span><i class="icon-moon-tag "></i></span><div class="keyword-tag">Fundamentals</div><div class="keyword-tag">Data Structures</div><div class="keyword-tag">Algorithms</div><div class="keyword-tag">Mathematics</div><div class="keyword-tag">Logic</div><div class="keyword-tag">Strings</div></div>
</div>
<div class="description-footer flex flex-row">
<div class="grow bg-contrast-n-100 dark:bg-contrast-100">
<div id="partner-display"><!--v-if--><!--v-if--><div class="cw-ad cw-ad--image"><a rel="nofollow noopener external" target="_blank" href="/ads/carbon_srv?path=/ads/click/x/GTND42JNCVBD6K77C6A4YKQNCY7DTKJUFT7IVZ3JCYSD45Q7FTAIK5QKCAADP2JKC6SDKKJWCESIKK3EHJNCLSIZ&amp;ad=419786&amp;placement=train_ad"><img alt="Ad" class="cw-ad__img" src="https://cdn4.buysellads.net/uu/1/81016/1609783186-authentic-260x200-variation-2.jpg"><div class="cw-ad__text"><!--v-if--><div class="cw-ad__copy"><span>Your new development career awaits. Check out the latest listings.</span><!--v-if--></div></div></a><a class="cw-ad__callout" target="carbon" href="http://ads.new/checkout/new/?utm_source=codewars-com-carbon&amp;utm_medium=ad_via_link&amp;utm_campaign=in_unit&amp;utm_term=carbon">Ads via Carbon</a></div></div>
</div>
<div class="max-w-[130px] text-center hidden lg:flex flow-row justify-center bg-contrast-n-200 dark:bg-contrast-200">
<a class="hover:text-current p-2 pb-4" data-tippy-content="The code engine that powers Codewars is the same used by Qualified.io, a platform built for educators and technical recruiters looking to train and hire the best software engineers." data-tippy-placement="top" href="https://www.qualified.io?utm_source=codewars&amp;utm_medium=web" target="_blank" rel="noopener">
<span class="pl-1 text-xs inline-block">powered by</span>
<img class="h-4 inline-block dark:hidden pl-1" src="https://www.codewars.com/packs/assets/qualified-black.b052752a.svg">
<img class="h-4 hidden dark:inline-block pl-1" src="https://www.codewars.com/packs/assets/qualified-white.7cba1bde.svg">
</a>
</div>
</div>
</div>
