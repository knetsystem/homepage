---
title: Wi-Fi Settings
section: support
subsection: wifi
layout: default
---
{::nomarkdown}
<h1>Wi-Fi Settings</h1>
<p>Some K-Net Dorms offer a Wi-Fi solution that is partially shared among all K-Net Dorms. Here are the settings required to connect to those networks.</p>

<p>Official Wi-Fi name is usually either "K-Net" or [dorm abbreviation]-Net, e.g. POP-Net.</p>

<h2>Android settings</h2>

<p>
    <b>EAP method</b>: PEAP<br>
    <b>Phase 2 authentication</b>: MSCHAPv2<br>
    <b>CA certificate</b>: Use system certificate or Do not use (not safe) or Download yourself; We base our trust on Let's Encrypt, download their CA <a href="https://letsencrypt.org/certificates/" target="_blank">here</a>.<br>
    <b>Online certificate status</b>: Do not verify<br>
    <b>Domain</b>: arthur.k-net.dk<br>
    <b>Identity</b>: [Your username, usually an e-mail address]<br>
    <b>Anonymous identity</b>: [Do not fill, leave field blank]<br>
    <b>Password</b>: [Your password]<br>
    Advanced (leave as is): We do not require Proxy settings, You must use DHCP to get an IP.
</p>

<p>Note: CA certificate is not strictly required to connect, but without it you might connect to a network that pretends to be official.</p>

<h2>Other</h2>

We do not have a guide for any other OS, but the guide for Android can be applied to similar settings with other operation systems.
{:/nomarkdown}
