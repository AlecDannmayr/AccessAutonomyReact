/** @format */

import React from 'react'
import { useState, useEffect } from 'react'
import '../css/style.css'
import BeKindHeaderImage from '../blog-images/Header-Images/BeKindHeader.jpeg'
import BrexitBusImage from '../blog-images/Be-kind/Brexit-Bus.jpeg'
import BudgetBoxImage from '../blog-images/Be-kind/BudgetBox.jpg'
import Jacinda from '../blog-images/Be-kind/Jacinda.jpg'

const beKind = () => {
    return (
        <div className="Blog-Content">
            <img className="Blog-Header-Image" src={BeKindHeaderImage} />

            <div className="blog-details">
                <h1>Why it pays to be kind in a harsh Environment</h1>
                <div>
                    <img src={BrexitBusImage}></img>
                    <p>
                        We appreciate NZ is a very sparkly populated country with a small population of just over 5 million compared to other economically developed countries especially thought within the common wealth such as the United Kingdom with
                        a population of over 67 million, of nearly 9 million of them in London alone.
                    </p>
                </div>
                <div>
                    <p>
                        Putting populations however, most Brits would love a prime minster that has brought much human element back to politics, British politics is often very static and plastic - fake and all about approval in the the tabloids and
                        avoid of human emotion. I don’t think British politicians can be blamed for this (for the best part) I think it comes down to two aspects:
                    </p>
                    <img src={BudgetBoxImage}></img>
                </div>

                <ol>
                    <li>Sneaky parties and politictains playing games that overall the operation has to play to keep up.</li>
                    <li>How they are all presented in the media (usual elements that have nothing to do with politics),</li>
                </ol>

                <div>
                    <div className="container-video">
                        <iframe
                            src="https://www.youtube.com/embed/Rf2LLlkjWfM?controls=0"
                            width="560"
                            height="315"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                        <p>
                            <cite>Youtube, 5 News, 2016</cite>
                        </p>
                    </div>
                    <p>we all remember that time David Cameron lambasted Jemery Corbin in parliament for not wearing a tie, an issue that is neither relevant, modern or pertinent to mention in a televised parliamentary debate</p>
                </div>

                <p>
                    Unfortunately, this is a sneaky avoidance tactic often used by politicians around the world, particularly in British politics. In this case a debate regarding the National Health Service deflected to the suitably, excuse the pun
                    of Jeremy Corbyns dress attire.
                </p>

                <p>
                    So let’s talk about Jacinda Arden way over on the other side of the world, she definitely a breath of freshair and a break for freedom when it comes to static and perfunctory inhuman politicians. Jasinda’ stance in a harsh and
                    quite literally politically charged environment. <br />
                    <br />
                    <i>
                        "One of the criticisms I've faced over the years is that I'm not aggressive enough or assertive enough, or maybe somehow, because I'm empathetic, I'm weak. I totally rebel against that. I refuse to believe that you cannot be
                        both compassionate and strong." - Jacinda Ardern
                    </i>
                </p>
                <img alt="Jacinda Ardern" src={Jacinda}></img>
                <p>She has a very human element, and accepts things don’t always go to plan, even on a Livestream.</p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/z8A-cEuCQRM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <cite>Youtube, Guardian News, 2021</cite>
                <p>
                    So how does this tie in the being kind in the work place? Here’s what Jacinda did in 2016 when New Zeland suffered a horrific terrorist attack on the Muslim community On the 15 March 2019 for the first time in its modern history
                    in which 51 people lost their lives. This is what she had to say “They are us,” she said of the victims. “New Zealand has been chosen because it was safe, because it was no place for hatred or racism. Because we represent
                    diversity, kindness, compassion, home for those who share our values. Refuge for those who need it.” Then, addressing the shooter, she said: “You may have chosen us – we utterly reject and condemn you.”  So this sort of speech
                    isn’t unusual, we’ve heard similar statements from Obama and Trump, but the difference here is what she did next irrelevant of what her voters might think. She immediately implemented tighter gun laws across the nation, buying
                    guns back from citizens - 47,000 firearms have been collected from the police since.
                </p>

                <p>
                    Navigating the Covid-19 pandemic Thanks to her strong leadership during the pandemic, a recent poll found that Ardern is the country’s most popular leader in 100 years. Almost 92 per cent of respondents say they support the
                    measures she has implemented. During a press conference on 11 May, she thanked her “team of five million” for their great efforts and the sacrifices they had made to protect the country’s most vulnerable during the outbreak.
                    “Kiwis from all walks of life were resolute and determined – determined that this was a war we could eventually win, but only if we acted together,” she said of the low infection rate at the time. On 14 May, New Zealand schools
                    reopened, restaurants and shops resumed trading, and workers returned to their offices. Well take a look at some of Jacinders ratings from her last election. “New Zealand Prime Minister Jacinda Ardern has won a landslide victory
                    in the country's general election. With all votes tallied, Ms Ardern's centre-left Labour Party won 49.1%, bringing a projected 64 seats and a rare outright parliamentary majority. The opposition centre-right National Party won
                    26.8% in Saturday's poll - just 35 seats in the 120-seat assembly.” (BBC News 2020) So why is this important.. If you want change you should be a shinning example of why being different is good, accept the change will take a long
                    time for people to see your point of view, be kind to people and don’t fall in with the crowd just because everyone else has fallen into the ways of a harsh political environment and DON’T WEAR A TIE BECUSE DAVID CAMERON TELLS YOU
                    TO!
                </p>
            </div>
        </div>
    )
}

export default beKind
