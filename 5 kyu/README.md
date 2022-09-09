<div class="description-content p-4">
<h3>1. Weight for Weight</h3>
<div class="markdown prose max-w-none mb-8" id="description"><p>My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because
each month a list with the weights of members is published and each month he is the last on the list
which means he is the heaviest. </p>
<p>I am the one who establishes the list so I told him:
"Don't worry any more, I will modify the order of the list".
It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits. </p>
<p>For example <code>99</code> will have "weight" <code>18</code>, <code>100</code> will have "weight" <code>1</code> so in the list <code>100</code> will come before <code>99</code>.</p>
<p>Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?</p>
<h4 id="example">Example:</h4>
<pre><code>"56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: 

"100 180 90 56 65 74 68 86 99"
</code></pre>
</div>
<div>
<h3>2. Moving Zeros To The End</h3>
<p>When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers:</p>
<p><code>180</code> is before <code>90</code> since, having the same "weight" (9),  it comes before as a <em>string</em>.</p>
<p>All numbers in the list are positive numbers and the list can be empty.</p>
</div>
<div class="description-content p-4">
<div class="markdown prose max-w-none mb-8" id="description"><p>Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.</p>
<pre style="display: none;"><code class="language-php"><span class="cm-variable">moveZeros</span>([<span class="cm-atom">false</span>,<span class="cm-number">1</span>,<span class="cm-number">0</span>,<span class="cm-number">1</span>,<span class="cm-number">2</span>,<span class="cm-number">0</span>,<span class="cm-number">1</span>,<span class="cm-number">3</span>,<span class="cm-string">"</span><span class="cm-string">a"</span>]) <span class="cm-comment">// returns[false,1,1,2,1,3,"a",0,0]</span>
</code></pre>
</div>
