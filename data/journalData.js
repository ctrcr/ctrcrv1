/**
 * Journal Data — single source of truth.
 *
 * To publish a new issue:
 *   1. Add an entry to `journalIssues` (newest first).
 *   2. Drop the PDF into public/journal/ and (optionally) its cover image.
 *   3. Add individual article entries to `journalArticles`.
 *
 * The `archiveCover` field is used by the Home → Archives card.
 * The Home page always displays the 3 most-recent issues (index 0–2).
 */

export const journalIssues = [
    {
        id: "vol3-issue1",
        title: "VOLUME III, ISSUE I",
        archiveCover: "/journal/vol3i1.png",
        pdf: "/journal/vol3 issue 1.pdf",
    },
    {
        id: "vol2-issue2",
        title: "VOLUME II, ISSUE II",
        archiveCover: "/journal/vol2ISs2.png",
        pdf: "/journal/Vol 2 Issue 2.pdf",
    },
    {
        id: "vol2-issue1",
        title: "VOLUME II, ISSUE I",
        archiveCover: "/journal/vol2ISs1.png",
        pdf: "/journal/Vol 2. Issue 1 Dec 2024.pdf",
    },
    {
        id: "vol1-issue2",
        title: "VOLUME I, ISSUE II",
        archiveCover:
            "https://ik.imagekit.io/ctrcr/Images/issue_2_cover.png?updatedAt=1713427903966",
        pdf: "https://ik.imagekit.io/ctrcr/PDF/Vol%201%20Issue%20II%20Updated.pdf?updatedAt=1718186589867",
    },
    {
        id: "vol1-issue1",
        title: "VOLUME I, ISSUE I",
        archiveCover:
            "https://ik.imagekit.io/ctrcr/Images/Issue_1_cover%20.png?updatedAt=1713427902926",
        pdf: "https://ik.imagekit.io/ctrcr/PDF/Volume%201%20Issue%201.pdf?updatedAt=1712685237604",
    },
];

/**
 * Individual articles shown in the JournalSlider (Articles section).
 * Each entry links to a specific article PDF (or the full issue PDF as fallback).
 */
export const journalArticles = [
    {
        id: "article-vol3-1",
        cover:
            "https://ik.imagekit.io/ctrcr/Images/Issues/6.webp?updatedAt=1712673512392",
        title: "VOLUME III, ISSUE I — JOURNAL ON CORPORATE LAW AND COMMERCIAL REGULATIONS",
        pdf: "/journal/vol3 issue 1.pdf",
    },
    {
        id: "article-1",
        cover:
            "https://ik.imagekit.io/ctrcr/Images/Issues/1.webp?updatedAt=1712673512701",
        title:
            "BEYOND THE GREEN LABEL EVALUATING THE PROPOSED GREEN BOND FRAMEWORK VIS-À-VIS GREENWASHING IN INDIA",
        pdf: "https://ik.imagekit.io/ctrcr/PDF/issues/BEYOND%20THE%20GREEN%20LABEL%20EVALUATING%20THE%20PROPOSED%20GREEN%20BOND%20FRAMEWORK%20VIS-%C3%80-VIS%20GREENWASHING%20IN%20INDIA.pdf?updatedAt=1712672450134",
    },
    {
        id: "article-2",
        cover:
            "https://ik.imagekit.io/ctrcr/Images/Issues/2.webp?updatedAt=1712673512561",
        title:
            "THE DOCTRINE OF PUBLIC POLICY BACKDOOR STRATEGY TO REVIEW FOREIGN ARBITRAL AWARD OR NECESSARY EVIL",
        pdf: "https://ik.imagekit.io/ctrcr/PDF/issues/The%20Doctrine%20of%20Public%20Policy%20Backdoor%20Strategy%20to%20review%20Foreign%20Arbitral%20Award%20or%20Necessary%20Evil.pdf?updatedAt=1712672449949",
    },
    {
        id: "article-3",
        cover:
            "https://ik.imagekit.io/ctrcr/Images/Issues/3.webp?updatedAt=1712673512345",
        title:
            "BPO SERVICE PROVIDER NOT BE CONSIDERED AS AN INTERMEDIARY FOR THE PURPOSES OF IGST ACT",
        pdf: "https://ik.imagekit.io/ctrcr/PDF/issues/BPO%20SERVICE%20PROVIDER%20NOT%20BE%20CONSIDERED%20AS%20AN%20_INTERMEDIARY_%20FOR%20THE%20PURPOSES%20OF%20IGST%20ACT.pdf?updatedAt=1712672450017",
    },
    {
        id: "article-4",
        cover:
            "https://ik.imagekit.io/ctrcr/Images/Issues/4.webp?updatedAt=1712673512669",
        title:
            "AN ASSESSMENT OF THE LIABILITY OF PAYMENT AGGREGATORS IN INDIA UNDER THE RBI GUIDELINES",
        pdf: "https://ik.imagekit.io/ctrcr/PDF/issues/An%20Assessment%20of%20the%20Liability%20of%20Payment%20Aggregators%20in%20India%20Under%20the%20RBI%20Guidelines.pdf?updatedAt=1712672449836",
    },
    {
        id: "article-5",
        cover:
            "https://ik.imagekit.io/ctrcr/Images/Issues/8.webp?updatedAt=1712673512413",
        title: "CRIMINAL LIABILITY GETS STRINGENT IN COPYRIGHT VIOLATION CASES",
        pdf: "https://ik.imagekit.io/ctrcr/PDF/issues/Criminal%20liability%20gets%20stringent%20in%20copyright%20violation%20cases.pdf?updatedAt=1712672449971",
    },
    {
        id: "article-6",
        cover:
            "https://ik.imagekit.io/ctrcr/Images/Issues/5.webp?updatedAt=1712673512369",
        title:
            "DEMYSTIFYING SHADOW BANKS AS A SUBSTITUTE TO THE BANKING SECTOR: A CRITICAL STUDY",
        pdf: "https://ik.imagekit.io/ctrcr/PDF/issues/Demystifying%20shadow%20Banks%20as%20a%20Substitute%20to%20the%20banking%20sector%20A%20critical%20study.pdf?updatedAt=1712672450133",
    },
    {
        id: "article-7",
        cover:
            "https://ik.imagekit.io/ctrcr/Images/Issues/6.webp?updatedAt=1712673512392",
        title:
            "PARITY OBLIGATIONS IN THE ONLINE HOTEL BOOKING INDUSTRY- CRITICALLY ANALYSING CCI'S ORDER AGAINST MMT",
        pdf: "https://ik.imagekit.io/ctrcr/PDF/issues/Parity%20Obligations%20in%20the%20Online%20Hotel%20Booking%20Industry%20-%20Critically%20Analyzing%20CCI's%20order%20against%20MMT-Go.pdf?updatedAt=1712672449884",
    },
    {
        id: "article-8",
        cover:
            "https://ik.imagekit.io/ctrcr/Images/Issues/6.webp?updatedAt=1712673512392",
        title:
            "PRE-PAID INSTRUMENTS A COMPARATIVE ANALYSIS BETWEEN INDIA AND THE UNITED ARAB EMIRATES",
        pdf: "https://ik.imagekit.io/ctrcr/PDF/issues/PRE-PAID%20INSTRUMENTS%20A%20COMPARATIVE%20ANALYSIS%20BETWEEN%20INDIA%20AND%20THE%20UNITED%20ARAB%20EMIRATES.pdf?updatedAt=1712672450188",
    },
];
