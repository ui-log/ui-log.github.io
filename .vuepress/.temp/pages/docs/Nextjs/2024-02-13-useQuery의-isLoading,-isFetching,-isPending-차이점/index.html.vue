<template><div><h1 id="usequery의-isloading-isfetching-ispending-차이점" tabindex="-1"><a class="header-anchor" href="#usequery의-isloading-isfetching-ispending-차이점" aria-hidden="true">#</a> useQuery의 isLoading, isFetching, isPending 차이점</h1>
<p>tanstack react query를 사용할 때 useQuery함수를 사용하게 되면 <code v-pre>isPending</code>, <code v-pre>isFetching</code>, <code v-pre>isLoading</code> 을 볼 수 있는데, 개발할 때 이 세가지의 용도에 대해서 헷갈리기 쉽다.</p>
<ul>
<li><code v-pre>isPending</code>: 페이지에 처음 들어왔을 때 <code v-pre>true</code></li>
<li><code v-pre>isFetching</code>: 데이터를 가져올 때마다 <code v-pre>true</code></li>
<li><code v-pre>isLoading</code>: <code v-pre>isFetching</code> &amp;&amp; <code v-pre>isPending</code> 으로 페이지에 처음 들어왔을 때 데이터가 로딩되는 순간</li>
</ul>
<p>즉, isLoading은 캐시된 데이터가 없으며 서버 컴포넌트에서 새로운 데이터를 가져올 때를 판단할 수 있다. 캐시된 데이터가 없으므로 페이지에서는 보여줄 데이터가 없으니 로딩 아이콘을 보여주면 된다.</p>
<p>캐시된 데이터가 있는 상태에서 다른 페이지에 갔다가 다시 돌아올 때는 로딩 아이콘을 굳이 보여줄 필요가 없이 새로운 데이터로 교체만 해주면 된다. 우리가 사이트를 이용할 때 페이지에 다시 돌아왔는데 1~2초 뒤에 데이터가 업데이트 되는 경우가 있는데 이런 경우에는 isFetching만 true가 되었던 것이다.</p>
</div></template>
