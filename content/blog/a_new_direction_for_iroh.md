+++
title = "A New Direction for Iroh"
date = 2023-02-15
description = """
Thus far, Iroh has been built as an implementation of the InterPlanetary File System (IPFS) focused on interoperability with Kubo, the reference implementation of IPFS. In the near future Iroh will break compatibility with the IPFS specification, and interoperability with Kubo.
"""
[extra]
author="n0 team"
+++

[Iroh](https://iroh.computer) will still be an IPFS implementation in a loose sense of the term, but moving forward our exclusive focus is on hitting numbers that make Iroh a reliable piece of technology that just works.

The measurements we’ve gathered from our work to date leaves us confident that we need to make breaking changes to get to that “it just works” feeling, which means a new direction for Iroh. Rather than delete the IPFS implementation we’ve built so far we will rename the project to *Beetle*, and put it into maintenance mode.

In the coming weeks we will publish source code, design documents, measurements and production deployment reports that lead up to a re-release of Iroh. You can stay up to date by subscribing to our [youtube channel](https://www.youtube.com/channel/UCdWMU1dBMmB4SrMokGI4jvA).

We have no plans to leave the IPFS community, instead we want to use our freedom from spec requirements to take big risks in the name of pushing IPFS forward. We see what we’re building as IPFS 2.0, and plan to convince others that Iroh should be formalized as an IPFS successor through a quantified design and real world adoption. We may fail, and if so our work will be published in the open as lessons for our colleagues to build upon.

### Why?

Because our metrics are telling us this is what we have to do. “Plan A” for Iroh was something like this:

1. Build a version of IPFS in rust that talks to kubo.
2. Measure.
3. Improve.
4. `GOTO 2`, until Iroh performance metrics approaches a theoretical max.

After 9 months of building and 5 releases of Iroh, we’ve accomplished a few iterations of Plan A. We have built an IPFS implementation that interoperates with kubo, measured it, and shipped a number of performance improvements.

Iroh is nowhere near any theoretical maximum.

There are lots of details to unpack in the future, but to get a sense of numbers, the current interop-focused Iroh needs at least 2,000 simultaneous p2p connections to serve as a gateway; sends on the order of 1,000 messages to retrieve a single 256KB block of data; takes on the order of seconds to resolve DHT queries; and cannot reliably remain connected to the vast majority of peers on the network, if connection is possible at all. We need those numbers to be on the order of 200 peers; less than 1 message per block; and 95%+ reliability. There is no way to get there without breaking things.

So, Plan B:

1. Define an IPFS-like system and quantify “working” in terms of stuff we can measure.
2. Build a thing that hits those numbers.
3. Build bridges to other IPFS implementations.

We’ve been working with this “Plan B” approach since early January, and our early experiments in this new paradigm are extremely promising. We’ve also been spending a great deal of time learning from other research in the space, some of which we are deeply excited to utilize given this newfound freedom.

The world needs IPFS. The only way to get there is to learn & grow. If you’ve ever thought “IPFS doesn’t work”, but wished it did, [we would like to hear from you](https://github.com/n0-computer/iroh/discussions).