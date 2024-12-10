# Parallel Mergesort

Implement a parallel version of mergesort (both the original recursive and the
iterative in-place version from a previous exercise are fine). You may use any
parallelization framework or method.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Plagarism Statement

All exercises must contain the following statement:
“I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.”

## Note
I did not complete this excersise last semester, so I am attempting this completely from scratch. This is an altered version of mergesort as I used my original mergesort code as a base, the testfile is also an altered version of the mergesort repo. I also read the slides pertaining to the different methods of parallelization. Finally I read through w3schools section called JS ASYNC, I believe the relative information was in the subtabs "Asynchronous"(https://www.w3schools.com/js/js_asynchronous.asp), "Promises"(https://www.w3schools.com/js/js_promise.asp), and "Async/Await".(https://www.w3schools.com/js/js_async.asp). For the analysis for a refresher on portions of time complexities I wathced "Recursion tree method: intuition | Merge Sort | Data Structure & Algorithm | Appliedroots"(https://www.youtube.com/watch?v=C4JjXc0htp0), more specifically I was looking for intuition on the recursion height and what kind of time merging actually took.

## Runtime Analysis

What is the span of the parallel program, in terms of worst-case $\Theta$? Hint:
It may help to consider the DAG of the parallel program.

## Answer:

This may be wrong, but this is the only logical path my mind can come up with. So the work being done in this algorithm comes mainly from the recursive splitting into groups in order to merge, and from the merging itself. The recursive splitting would have $\Theta(logn)$ levels, and the merging would be dominated by $n$ for the largest sub grouping of the array. So when you combine these two you would have a span of $\Theta(nlogn)$.
