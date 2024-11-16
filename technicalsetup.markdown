---
title: Technical setup
section: about
subsection: technicalsetup
layout: default
---
{::nomarkdown}
<h1>Technical setup</h1>
<p>The following text is for readers with a technical understanding, who are interested in the setup K-Net is running.</p>
<p>There are around 2400 users on K-Net. They are all connected via ethernet equipment. K-Net (AS204141) have several IP addresses assigned. See <a href="/routingstats">Routing stats</a>.</p>

<p>Would you like to be part of improving our exciting setup? <a href="/volunteering">Read more about volunteering</a>.</p>

<h2>Transparent firewall using VLANs</h2>
<p>This setup was created in 2011-2012 because of scalability issues with the Authpf based solution, and the user demand to not have to authenticate via SSH.</p>
<p>When the setup is fully deployed, all edge switches in the dorms are set up so that each port leading to a room tags traffic with a seperate VLAN. All traffic must then go through a firewall server running Linux, where a VLAN interface is set up for each user. This enables true layer 3 seperation between all users.</p>
<p>WiFi users are handled by a RADIUS server which supplies a VLAN ID that the access point must tag traffic from the wireless client with.</p>

<p>The following diagram illustrates the architecture of the VLAN based transparent firewall setup:</p>
<img src="/img/knetvlansetup_simplified_for_the_public_v2.svg" alt="Architecture of the VLAN based transparent firewall setup"/>
{:/nomarkdown}
