"use strict";(self.webpackChunkcf_infra_docs=self.webpackChunkcf_infra_docs||[]).push([[5148],{23182:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>r});var i=s(85893),t=s(11151);const l={title:"2020-08-05"},a="2020-08-05 conda-forge core meeting",o={id:"minutes/2020-08-05",title:"2020-08-05",description:"Zoom link",source:"@site/community/minutes/2020-08-05.md",sourceDirName:"minutes",slug:"/minutes/2020-08-05",permalink:"/community/minutes/2020-08-05",draft:!1,unlisted:!1,editUrl:"https://github.com/ocefpaf/conda-forge.github.io/tree/refs/heads/main/community/minutes/2020-08-05.md",tags:[],version:"current",lastUpdatedAt:1722342493e3,frontMatter:{title:"2020-08-05"},sidebar:"community",previous:{title:"2020-08-12",permalink:"/community/minutes/2020-08-12"},next:{title:"2020-07-29",permalink:"/community/minutes/2020-07-29"}},c={},r=[{value:"Attendees",id:"attendees",level:2},{value:"Agenda",id:"agenda",level:2},{value:"Standing items",id:"standing-items",level:3},{value:"Your new agenda items",id:"your-new-agenda-items",level:3},{value:"Stuff from last week that we didn&#39;t get to",id:"stuff-from-last-week-that-we-didnt-get-to",level:3},{value:"Active votes",id:"active-votes",level:3},{value:"Subteam updates",id:"subteam-updates",level:3},{value:"Bot",id:"bot",level:4},{value:"ARM",id:"arm",level:4},{value:"POWER",id:"power",level:4},{value:"CUDA",id:"cuda",level:4},{value:"Docs",id:"docs",level:4},{value:"staged-recipes",id:"staged-recipes",level:4},{value:"website",id:"website",level:4},{value:"security+systems",id:"securitysystems",level:4},{value:"CI infrastructure",id:"ci-infrastructure",level:3},{value:"Compiler upgrade",id:"compiler-upgrade",level:4},{value:"CFEP updates",id:"cfep-updates",level:3},{value:"Open PRs",id:"open-prs",level:4},{value:"Discussion",id:"discussion",level:2},{value:"Check in on previous action items",id:"check-in-on-previous-action-items",level:2},{value:"This meeting",id:"this-meeting",level:3},{value:"Last meeting",id:"last-meeting",level:3},{value:"2 meetings ago",id:"2-meetings-ago",level:3},{value:"3 meetings ago",id:"3-meetings-ago",level:3},{value:"Move to Issue Tracker",id:"move-to-issue-tracker",level:3}];function d(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",input:"input",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"2020-08-05-conda-forge-core-meeting",children:"2020-08-05 conda-forge core meeting"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://flatiron.zoom.us/j/93242638216?pwd=bjRCWmVJRW1oTGJhN09VUmxtTTJOUT09",children:"Zoom link"}),"\n",(0,i.jsx)(n.a,{href:"https://arewemeetingyet.com/UTC/2020-08-05/17:00/w/Conda-forge%20dev%20meeting#eyJ1cmwiOiJodHRwczovL2hhY2ttZC5pby9wUk15dFVKV1FmU3NJM2xvMGlqQzJRP2VkaXQifQ==",children:"What time is the meeting in my time zone"})]}),"\n",(0,i.jsx)(n.h2,{id:"attendees",children:"Attendees"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Matthew R. Becker"}),"\n",(0,i.jsx)(n.li,{children:"Cheng H. Lee"}),"\n",(0,i.jsx)(n.li,{children:"CJ"}),"\n",(0,i.jsx)(n.li,{children:"Ray Douglass"}),"\n",(0,i.jsx)(n.li,{children:"Paul Martin"}),"\n",(0,i.jsx)(n.li,{children:"Isuru"}),"\n",(0,i.jsx)(n.li,{children:"Keith K"}),"\n",(0,i.jsx)(n.li,{children:"Sylvain"}),"\n",(0,i.jsx)(n.li,{children:"Wolf"}),"\n",(0,i.jsx)(n.li,{children:"Michael Sarahan"}),"\n",(0,i.jsx)(n.li,{children:"Scopatz"}),"\n",(0,i.jsx)(n.li,{children:"Helmus"}),"\n",(0,i.jsx)(n.li,{children:"Marcelo"}),"\n",(0,i.jsx)(n.li,{children:"Marius van Niekerk"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"agenda",children:"Agenda"}),"\n",(0,i.jsx)(n.h3,{id:"standing-items",children:"Standing items"}),"\n",(0,i.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," intros for new folks on the call"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," (CJ) budget"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"your-new-agenda-items",children:"Your new agenda items"}),"\n",(0,i.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," (MRB) going to start removing people from feedstocks"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"smithy and the web services have not been removing people from maintenance teams\nwhen they are no longer listed in the recipe"}),"\n",(0,i.jsx)(n.li,{children:"I put in a bug fix for this"}),"\n",(0,i.jsx)(n.li,{children:"I tested the bug fix in various permutations using a test feedstock. Works fine."}),"\n",(0,i.jsxs)(n.li,{children:["going to roll it out\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"make an announcement"}),"\n",(0,i.jsx)(n.li,{children:"turn it on for the webservices"}),"\n",(0,i.jsx)(n.li,{children:"use an admin migration to clean up the rest of the feedstocks"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"No issues or concerns raised"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," (MRB) finally finish CFEP-13"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["the output validation appears to be working fine\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"(IF) we still have git clone issues from time to time, but not a huge issue"}),"\n",(0,i.jsx)(n.li,{children:"(MRB) The latest smithy fixes though so they should be less and less common as people\nuse the updated version."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["last step is to rotate the binstar token\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"going to delete all current tokens for conda-forge and make a new one that\njust lives in heroku and admin-requests"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["roll out:\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"make an announcement"}),"\n",(0,i.jsx)(n.li,{children:"make a new token"}),"\n",(0,i.jsx)(n.li,{children:"update heroku with new token"}),"\n",(0,i.jsx)(n.li,{children:"update admin-requests with new token"}),"\n",(0,i.jsx)(n.li,{children:"hopefully we don't break anything"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["post roll out cleanup\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"remove any old encrypted tokens from conda-forge.yml in feedstocks"}),"\n",(0,i.jsx)(n.li,{children:"put staging token in the azure global cred we use"}),"\n",(0,i.jsx)(n.li,{children:"remove individual creds from azure builds"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Consider dropping building python 3.6 with PGO (Windows builds on appveyor)"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," Dropping python 3.6"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"need an announcement cycle"}),"\n",(0,i.jsxs)(n.li,{children:["should we follow NEP29? NEP29 + 6 months?\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://numpy.org/neps/nep-0029-deprecation_policy.html#drop-schedule",children:"https://numpy.org/neps/nep-0029-deprecation_policy.html#drop-schedule"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["End of life for Python 3.x versions:\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://devguide.python.org/#status-of-python-branches",children:"https://devguide.python.org/#status-of-python-branches"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["No pypy for 3.7\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://foss.heptapod.net/pypy/pypy/-/wikis/py3.7%20status",children:"https://foss.heptapod.net/pypy/pypy/-/wikis/py3.7%20status"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Action Item: Send to issue (get input from pypy team and others)"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," (CHL) Upcoming conda 4.8.4 release; planning for 4.9.0"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["4.8.4 is (more or less) bug fix only, including two bugs that cause data loss.\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Expected release date: 2020-08-07 (ish)."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["4.9.0 in planning:\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Should be relatively fast follow from 4.8.4 (1-2 months following)"}),"\n",(0,i.jsx)(n.li,{children:'Major changes: Isuru\'s CPU feature flags and osx-arm64 PRs (changes\nvirtual package reporting; adds new un-tested, "un-released" platform\nso not appropriate for patch release)'}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["(MRB) This one too please: ",(0,i.jsx)(n.a,{href:"https://github.com/conda/conda/pull/10057",children:"https://github.com/conda/conda/pull/10057"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"looks like it is on 4.9.0"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," (Paul Martin) Repacking intel MKL from intel instead of Anaconda"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/conda-forge/intel_repack-feedstock/pulls",children:"https://github.com/conda-forge/intel_repack-feedstock/pulls"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/conda-forge/intel_repack-feedstock/pull/12",children:"https://github.com/conda-forge/intel_repack-feedstock/pull/12"})}),"\n",(0,i.jsxs)(n.li,{children:["Action Items:\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Request input from Intel on their level of comforat among our options for repackaging"}),"\n",(0,i.jsx)(n.li,{children:"If they are comfortable with a direct repackage ask for permissions to scrape the version\nnumbers as needed by the bot"}),"\n",(0,i.jsx)(n.li,{children:"If Intel is comfortable with bot scraping, put up issue to cf-scripts to enable"}),"\n",(0,i.jsx)(n.li,{children:"Check back in one month unless things happen sooner"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"stuff-from-last-week-that-we-didnt-get-to",children:"Stuff from last week that we didn't get to"}),"\n",(0,i.jsx)(n.h3,{id:"active-votes",children:"Active votes"}),"\n",(0,i.jsx)(n.h3,{id:"subteam-updates",children:"Subteam updates"}),"\n",(0,i.jsx)(n.h4,{id:"bot",children:"Bot"}),"\n",(0,i.jsx)(n.h4,{id:"arm",children:"ARM"}),"\n",(0,i.jsx)(n.h4,{id:"power",children:"POWER"}),"\n",(0,i.jsx)(n.h4,{id:"cuda",children:"CUDA"}),"\n",(0,i.jsx)(n.h4,{id:"docs",children:"Docs"}),"\n",(0,i.jsx)(n.h4,{id:"staged-recipes",children:"staged-recipes"}),"\n",(0,i.jsx)(n.h4,{id:"website",children:"website"}),"\n",(0,i.jsx)(n.h4,{id:"securitysystems",children:"security+systems"}),"\n",(0,i.jsx)(n.p,{children:"See items above."}),"\n",(0,i.jsx)(n.h3,{id:"ci-infrastructure",children:"CI infrastructure"}),"\n",(0,i.jsx)(n.h4,{id:"compiler-upgrade",children:"Compiler upgrade"}),"\n",(0,i.jsx)(n.h3,{id:"cfep-updates",children:"CFEP updates"}),"\n",(0,i.jsx)(n.h4,{id:"open-prs",children:"Open PRs"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/conda-forge/conda-forge-enhancement-proposals/pull/7",children:"cfep-04"})," X11 and CDT policy"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"INACTIVE - Merge in with some inactive-esque status?"}),"\n",(0,i.jsx)(n.li,{children:"Needs new champion. Thanks for your work on this pkgw! Has unaddressed comments from pkgw as from Jan 10, 2020"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/conda-forge/conda-forge-enhancement-proposals/pull/9",children:"cfep-06"})," Staged-recipes review lifecycle"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"INACTIVE - Merge in with some inactive-esque status?"}),"\n",(0,i.jsx)(n.li,{children:"Lingering comment from @saraedum. @jakirkham, can you reply? Has unadressed comment from @saraedum from Jan 8, 2020"}),"\n",(0,i.jsx)(n.li,{children:"(MRB) The stalebot has solved the worst of the issues here. I think we could defer this one permanently."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/conda-forge/conda-forge-enhancement-proposals/pull/15",children:"cfep-10"})," Feedstock statuses, unmaintained"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"INACTIVE - Merge in with some inactive-esque status?"}),"\n",(0,i.jsx)(n.li,{children:"Needs another review. Has unaddressed updates from pkgw as of Jan 11, 2020"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/conda-forge/cfep/pull/23",children:"cfep-12"})," Removing packages that violate the terms of the source package"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Stalled since May 26, 2020"}),"\n",(0,i.jsx)(n.li,{children:'Active debate about moving to "broken" vs deleting from conda-forge channel'}),"\n",(0,i.jsx)(n.li,{children:"Active vote, ends on 2020-03-11"}),"\n",(0,i.jsx)(n.li,{children:"What were the results of the vote?"}),"\n",(0,i.jsx)(n.li,{children:"Did we hear back from NumFOCUS?"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/conda-forge/cfep/pull/32",children:"cfep-17"})," Handling pin backports and dependency rebuilds"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Stalled debate about implementation details between Isuru, CJ and Matt"}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"UPDATE 2020-07-22"}),": We in principle have agreement to render the extra pinnings needed directly in the feedstock\non a temporary basis (i.e., until the migration has ended)."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"discussion",children:"Discussion"}),"\n",(0,i.jsx)(n.h2,{id:"check-in-on-previous-action-items",children:"Check in on previous action items"}),"\n",(0,i.jsx)(n.p,{children:"Copy previous action items from last meeting agenda."}),"\n",(0,i.jsx)(n.h3,{id:"this-meeting",children:"This meeting"}),"\n",(0,i.jsx)(n.h3,{id:"last-meeting",children:"Last meeting"}),"\n",(0,i.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," Figure out how to communicate breaking changes to users. Likely should open up an issue immediately for futher discussion. Ping @kkraus, plus capture notes from further up in these meeting notes"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," (Eric) TODO: Make strict an option in conda_forge.yaml and turn it on by default. Open issue in conda-smithy"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"2-meetings-ago",children:"2 meetings ago"}),"\n",(0,i.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," Eric to add a new page to our docs around how to engage with conda-forge and affiliated in a commercial relationship."]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," Eric will get the NVBug link from Keith and archive it in the conda-forge google drive."]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," John K. will update the cuda toolkit feedstock on the git repo to note the NVBug link to the internal NVIDIA issue tracker"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," Jonathan will update docs to note that some non-exhaustive list of packages (like cuda-toolkit, MKL, etc.)"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," Jonathan will review this ",(0,i.jsx)(n.a,{href:"https://github.com/AnacondaRecipes/cudatoolkit-feedstock/pull/7",children:"PR"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"3-meetings-ago",children:"3 meetings ago"}),"\n",(0,i.jsx)(n.h3,{id:"move-to-issue-tracker",children:"Move to Issue Tracker"}),"\n",(0,i.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," (Kale) schedule conda working group"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," cfep-10 next steps: CJ to call a vote for feedback"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," cfep-06 next steps: Ask staged recipes team to champion this CFEP and move it forward"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," jakirkham & CJ-wright to sync on adding CUDA to the migration bot"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," (Eric) Scheduling Anaconda <-> conda-forge sync on anaconda.org requirements gathering\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Will try and get this scheduled in the next month."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," (Anthony) Reach out to NumFocus to figure out legal ramifications of not including licenses in files."]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," (Eric) check internally for funding levels for hotels & flying folks from the community in?"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," (Eric) Figure out finances of conda-forge to support themselves?"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," (jjhelmus) Open up CFEP for which python's we're going to support"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," (jakirkham) write a blog post on CUDA stuff we discussed today"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," (jakirkham) update docs on how to add CUDA support to feedstocks"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," (jakirkham) will open an issue on conda-smithy to investigate Drone issues. (ping the aarch team)\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/conda-forge/conda-forge.github.io/issues/954",children:"https://github.com/conda-forge/conda-forge.github.io/issues/954"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," (ED) Who we are page? Some combination of a FAQ and a who is everyone. FAQ things like:\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"who's the POC for CF <> Anaconda, CF <> NumFocus, CF <> Azure"}),"\n",(0,i.jsx)(n.li,{children:"who's the POC for the various subteams?"}),"\n",(0,i.jsx)(n.li,{children:"Informal information: roles, day jobs, bios, the whole nine yards, why you're here, etc."}),"\n",(0,i.jsx)(n.li,{children:"Public or internal? I don't really care either way. Anyone feel strongly one way or the other?"}),"\n",(0,i.jsx)(n.li,{children:"opt-in to public bios"}),"\n",(0,i.jsxs)(n.li,{children:["software carpentry has a large number of instructors and has ",(0,i.jsx)(n.a,{href:"https://carpentries.org/instructors",children:"https://carpentries.org/instructors"})]}),"\n",(0,i.jsx)(n.li,{children:'some concern about "yet another place to keep stuff up to date"'}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," (CJ) Form finance subteam"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," (ED) document strategies for reproducible environments using conda-forge"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," (UK) Static libraries stuff\n",(0,i.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," Add linting hints to builds to find them"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," Recommend how to package them -> CFEP-18"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," We should write docs saying we don't provide support and this is a bad idea. -> CFEP-18"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>a});var i=s(67294);const t={},l=i.createContext(t);function a(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);