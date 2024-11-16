---
title: Routing stats
section: about
subsection: routingstats
layout: default
---
{::nomarkdown}
<script src="//stat.ripe.net/widgets/widget_api.js"></script>

<div class="row">
	<div class="span5">
    <h1>Routing stats</h1>
    <p>These statistics are publicly avaliable at the <a href="https://ripe.net">Réseaux IP Européens Network Coordination Centre</a>, this page is a collection of stats regarding K-Net.</p>
    <!-- RIPEstat logo: https://stat.ripe.net/widgets/lib/img/logo.png -->
  </div>
	<div class="span4">
    &nbsp;
  </div>
	<div class="span3">
    <div id="whats-my-ip"></div>
  </div>
</div>

<h2>Prefix owerview<h2>
<div class="row">
	<div class="span4">
    <div id="prefix-overview1"></div>
  </div>
	<div class="span4">
    <div id="prefix-overview2"></div>
  </div>
	<div class="span4">
    <div id="prefix-overview3"></div>
  </div>
</div>

<div class="row">
	<div class="span12">
    <div id="prefix-routing-consistency1"></div>
  </div>
</div>
<div class="row">
	<div class="span12">
    <div id="prefix-routing-consistency2"></div>
  </div>
</div>
<div class="row">
	<div class="span12">
    <div id="prefix-routing-consistency3"></div>
  </div>
</div>

<script>
var net1 = "82.211.192.0/19";
var net2 = "185.140.0.0/22";
var net3 = "2A03:19C0::/32";
var ropts = {"size":"fit","show_controls":"no","disable":["maximize", "logo"]};


ripestat.init("whats-my-ip", {}, "whats-my-ip", { size: "fit", disable: ["title", "data", "info", "permalink", "embed-code", "maximize"] });

ripestat.init("prefix-overview",{"max_related":50,"resource":net1},"prefix-overview1",ropts);
ripestat.init("prefix-overview",{"max_related":50,"resource":net2},"prefix-overview2",ropts);
ripestat.init("prefix-overview",{"max_related":50,"resource":net3},"prefix-overview3",ropts);
ripestat.init("prefix-routing-consistency",{"resource":net1},"prefix-routing-consistency1",ropts);
ripestat.init("prefix-routing-consistency",{"resource":net2},"prefix-routing-consistency2",ropts);
ripestat.init("prefix-routing-consistency",{"resource":net3},"prefix-routing-consistency3",ropts);

</script>

{:/nomarkdown}
