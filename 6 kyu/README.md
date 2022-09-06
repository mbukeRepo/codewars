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
</div>
</div>
</div>
