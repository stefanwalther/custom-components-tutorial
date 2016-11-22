---
title: "Frequently Asked Questions"
sub-title: "You were always wondering how X or Z works? Here's hopefully the answer."
slug: "250-frequently-asked-questions-faq"
---

**Q: Can/should I use `qvangular`, similar to registering directives when creating visualization extensions?**

**A:** No, you shouldn't use `qvangular` in your custom components to register a directive. Use the concept of returning multiple components from a single component definition file (see chapter "Nested components").
Technically speaking that would work, but future changes and additions to the custom component concept would very likely break such implementations.

You didn't find the answer to your question?
Please do not hesitate to use the comment section below to ask!