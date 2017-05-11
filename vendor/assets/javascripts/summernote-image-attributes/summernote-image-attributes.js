





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">



  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-81a59bf26d881d29286674f6deefe779c444382fff322085b50ba455460ccae5.css" integrity="sha256-gaWb8m2IHSkoZnT23u/necREOC//MiCFtQukVUYMyuU=" media="all" rel="stylesheet" />
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-ef84494825a8b13f5ed2dd486358ee60ec257d0a77ab9f3cf98a988236fe6380.css" integrity="sha256-74RJSCWosT9e0t1IY1juYOwlfQp3q588+YqYgjb+Y4A=" media="all" rel="stylesheet" />
  
  
  
  

  <meta name="viewport" content="width=device-width">
  
  <title>summernote-image-attributes/summernote-image-attributes.js at master · StudioJunkyard/summernote-image-attributes</title>
  <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta content="https://avatars3.githubusercontent.com/u/841740?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="StudioJunkyard/summernote-image-attributes" property="og:title" /><meta content="https://github.com/StudioJunkyard/summernote-image-attributes" property="og:url" /><meta content="summernote-image-attributes - Summernote plugin to edit image attributes" property="og:description" />

  <link rel="assets" href="https://assets-cdn.github.com/">
  <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6MTU0MDY2MjEwOjM1OTgyMDc0ZTc4NjY1M2JjOTRhODYyNjIzMjQ5MGM4NmM0Y2VkMjViMjJjNTBiY2Y0NzkxZjBlZTNiZTU5MmM=--470b805b27afee572a90dc4701ef7629e9972282">
  <meta name="pjax-timeout" content="1000">
  <link rel="sudo-modal" href="/sessions/sudo_modal">
  <meta name="request-id" content="DBAC:0151:9980D19:E500CB5:591465CC" data-pjax-transient>
  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

  <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="https://collector.githubapp.com/github-external/browser_event" name="octolytics-event-url" /><meta content="DBAC:0151:9980D19:E500CB5:591465CC" name="octolytics-dimension-request_id" /><meta content="69764" name="octolytics-actor-id" /><meta content="apradillap" name="octolytics-actor-login" /><meta content="93261bab3a7397d72218ef8be58440fc9ad989b1eb43f16c6c0acc4f32eb27e5" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />




  <meta class="js-ga-set" name="dimension1" content="Logged In">


  

      <meta name="hostname" content="github.com">
  <meta name="user-login" content="apradillap">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="OWYwNzE2MjU1NDRlYzdhYjdmMzIzOTZiMDMyZDc4NWVmOTVhMDQxYmM5ZWFjYzU2N2FhMjk4ZmY3ZDI5YmVkMHx7InJlbW90ZV9hZGRyZXNzIjoiODMuNTkuMjQuMTkyIiwicmVxdWVzdF9pZCI6IkRCQUM6MDE1MTo5OTgwRDE5OkU1MDBDQjU6NTkxNDY1Q0MiLCJ0aW1lc3RhbXAiOjE0OTQ1MDkwMTAsImhvc3QiOiJnaXRodWIuY29tIn0=">


  <meta name="html-safe-nonce" content="9a608159bd620b07357c7191b505b6d6da95aa2b">

  <meta http-equiv="x-pjax-version" content="af548b070e2d220a7c5f9808a07398e8">
  

    
  <meta name="description" content="summernote-image-attributes - Summernote plugin to edit image attributes">
  <meta name="go-import" content="github.com/StudioJunkyard/summernote-image-attributes git https://github.com/StudioJunkyard/summernote-image-attributes.git">

  <meta content="841740" name="octolytics-dimension-user_id" /><meta content="StudioJunkyard" name="octolytics-dimension-user_login" /><meta content="55139436" name="octolytics-dimension-repository_id" /><meta content="StudioJunkyard/summernote-image-attributes" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="55139436" name="octolytics-dimension-repository_network_root_id" /><meta content="StudioJunkyard/summernote-image-attributes" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/StudioJunkyard/summernote-image-attributes/commits/master.atom" rel="alternate" title="Recent Commits to summernote-image-attributes:master" type="application/atom+xml">


    <link rel="canonical" href="https://github.com/StudioJunkyard/summernote-image-attributes/blob/master/summernote-image-attributes.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

<meta name="theme-color" content="#1e2327">


  <meta name="u2f-support" content="true">

  </head>

  <body class="logged-in env-production emoji-size-boost page-blob">
    


  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    



        
<div class="header" role="banner">
  <div class="container clearfix">
    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>


        <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/StudioJunkyard/summernote-image-attributes/search" class="js-site-search-form" data-scoped-search-url="/StudioJunkyard/summernote-image-attributes/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
        <a href="/StudioJunkyard/summernote-image-attributes/blob/master/summernote-image-attributes.js" class="header-search-scope no-underline">This repository</a>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        value=""
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
        <input type="hidden" class="js-site-search-type-field" name="type" >
    </label>
</form></div>


      <ul class="header-nav float-left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" aria-label="Pull requests you created" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" aria-label="Issues you created" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav float-right" id="user-links">
  <li class="header-nav-item">
    
    <a href="/notifications" aria-label="You have unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s js-socket-channel js-notification-indicator " data-channel="notification-changed:69764" data-ga-click="Header, go to notifications, icon:unread" data-hotkey="g n">
        <span class="mail-status unread"></span>
        <svg aria-hidden="true" class="octicon octicon-bell float-left" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"/></svg>
</a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new…"
       data-ga-click="Header, create new, icon:add">
      <svg aria-hidden="true" class="octicon octicon-plus float-left" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5z"/></svg>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>

<a class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, create new gist">
  New gist
</a>

  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="StudioJunkyard/summernote-image-attributes">This repository</span>
  </div>
    <a class="dropdown-item" href="/StudioJunkyard/summernote-image-attributes/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-sw js-menu-target" href="/apradillap"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@apradillap" class="avatar" src="https://avatars2.githubusercontent.com/u/69764?v=3&amp;s=40" height="20" width="20">
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu dropdown-menu-sw">
        <div class="dropdown-header header-nav-current-user css-truncate">
          Signed in as <strong class="css-truncate-target">apradillap</strong>
        </div>

        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/apradillap" data-ga-click="Header, go to profile, text:your profile">
          Your profile
        </a>
        <a class="dropdown-item" href="/apradillap?tab=stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
        <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
          Explore
        </a>
          <a class="dropdown-item" href="/integrations" data-ga-click="Header, go to integrations, text:integrations">
            Integrations
          </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>

        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
          Settings
        </a>

        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="YnkkUNq9eSXilXlxGXzT0wZFsosi4Lfpjkqr1CcePUsrp4Ffhhzgdt4X7jwpZaAJITvKcnRBBtjZLH61w3ytXA==" /></div>
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
</form>      </div>
    </div>
  </li>
</ul>


    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="sr-only right-0" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="WHJE6xtChYyBiaSV5j1mp2r1oleprHbJbbQEz2IdCtgRrOHkR+Mc370LM9jWJBV9TYvarv8Nx/g60tGuhn+azw==" /></div>
      <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
        Sign out
      </button>
</form>  </div>
</div>


      

  </div>

  <div id="start-of-content" class="accessibility-aid"></div>

    <div id="js-flash-container">
</div>



  <div role="main">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
        



    <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
      <div class="container repohead-details-container">

        <ul class="pagehead-actions">
  <li>
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Zj74VzWfF21WOBy5L0thuooGrgCPvUBsWBdigPO3mNnAAtrM83/AqzAcPnj80SUEJb9CUGeWMqvO880/lU5aPw==" /></div>      <input class="form-control" id="repository_id" name="repository_id" type="hidden" value="55139436" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/StudioJunkyard/summernote-image-attributes/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
            data-ga-click="Repository, click Watch settings, action:blob#show">
            <span class="js-select-button">
                <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                Watch
            </span>
          </a>
            <a class="social-count js-social-count"
              href="/StudioJunkyard/summernote-image-attributes/watchers"
              aria-label="3 users are watching this repository">
              3
            </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content">
            <div class="select-menu-header js-navigation-enable" tabindex="-1">
              <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                        Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input id="do_ignore" name="do" type="radio" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-mute" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"/></svg>
                        Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
      <div class="js-toggler-container js-social-container starring-container ">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/StudioJunkyard/summernote-image-attributes/unstar" class="starred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="VmLd696XoojOEtZnNZsD3E/RMHUVGFpHvhU8a7LilVnlBaEOMHremYGsznD/mGx3NLwnV5Uqbwc2kpglbgQkuw==" /></div>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar StudioJunkyard/summernote-image-attributes"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/StudioJunkyard/summernote-image-attributes/stargazers"
           aria-label="24 users starred this repository">
          24
        </a>
</form>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/StudioJunkyard/summernote-image-attributes/star" class="unstarred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="NbiS9GsXC7wS8CgTYqPksEkNGoTLQG863KQ0rVXbkQvi6a63/rPu0yByY1iERrbnqPpsvUILTQkGyUFxmW2nEw==" /></div>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star StudioJunkyard/summernote-image-attributes"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/StudioJunkyard/summernote-image-attributes/stargazers"
           aria-label="24 users starred this repository">
          24
        </a>
</form>  </div>

  </li>

  <li>
          <a href="#fork-destination-box" class="btn btn-sm btn-with-count"
              title="Fork your own copy of StudioJunkyard/summernote-image-attributes to your account"
              aria-label="Fork your own copy of StudioJunkyard/summernote-image-attributes to your account"
              rel="facebox"
              data-ga-click="Repository, show fork modal, action:blob#show; text:Fork">
              <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
            Fork
          </a>

          <div id="fork-destination-box" style="display: none;">
            <h2 class="facebox-header" data-facebox-id="facebox-header">Where should we fork this repository?</h2>
            <include-fragment src=""
                class="js-fork-select-fragment fork-select-fragment"
                data-url="/StudioJunkyard/summernote-image-attributes/fork?fragment=1">
              <img alt="Loading" height="64" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-128.gif" width="64" />
            </include-fragment>
          </div>

    <a href="/StudioJunkyard/summernote-image-attributes/network" class="social-count"
       aria-label="29 users forked this repository">
      29
    </a>
  </li>
</ul>

        <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a href="/StudioJunkyard" class="url fn" rel="author">StudioJunkyard</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/StudioJunkyard/summernote-image-attributes" data-pjax="#js-repo-pjax-container">summernote-image-attributes</a></strong>

</h1>

      </div>
      <div class="container">
        
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/StudioJunkyard/summernote-image-attributes" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /StudioJunkyard/summernote-image-attributes" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/StudioJunkyard/summernote-image-attributes/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /StudioJunkyard/summernote-image-attributes/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">0</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/StudioJunkyard/summernote-image-attributes/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /StudioJunkyard/summernote-image-attributes/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">0</span>
      <meta itemprop="position" content="3">
</a>  </span>

    <a href="/StudioJunkyard/summernote-image-attributes/projects" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /StudioJunkyard/summernote-image-attributes/projects">
      <svg aria-hidden="true" class="octicon octicon-project" height="16" version="1.1" viewBox="0 0 15 16" width="15"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      Projects
      <span class="Counter" >0</span>
</a>
    <a href="/StudioJunkyard/summernote-image-attributes/wiki" class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /StudioJunkyard/summernote-image-attributes/wiki">
      <svg aria-hidden="true" class="octicon octicon-book" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"/></svg>
      Wiki
</a>


  <a href="/StudioJunkyard/summernote-image-attributes/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /StudioJunkyard/summernote-image-attributes/pulse">
    <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8z"/></svg>
    Pulse
</a>
  <a href="/StudioJunkyard/summernote-image-attributes/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /StudioJunkyard/summernote-image-attributes/graphs">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Graphs
</a>

</nav>

      </div>
    </div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    
          

<a href="/StudioJunkyard/summernote-image-attributes/blob/3e04792f62a162a8bc514ad598537a64827e15db/summernote-image-attributes.js" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:9d8a9e30c1dc0325a1bf9e98192e93c9 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class=" btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
      <i>Branch:</i>
      <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/StudioJunkyard/summernote-image-attributes/blob/master/summernote-image-attributes.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="BtnGroup float-right">
    <a href="/StudioJunkyard/summernote-image-attributes/find/master"
          class="js-pjax-capture-input btn btn-sm BtnGroup-item"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/StudioJunkyard/summernote-image-attributes"><span>summernote-image-attributes</span></a></span></span><span class="separator">/</span><strong class="final-path">summernote-image-attributes.js</strong>
  </div>
</div>



  <div class="commit-tease">
      <span class="float-right">
        <a class="commit-tease-sha" href="/StudioJunkyard/summernote-image-attributes/commit/a071d9a310fcc7d390ad611d59b2342533dd18a3" data-pjax>
          a071d9a
        </a>
        <relative-time datetime="2017-02-22T09:54:29Z">Feb 22, 2017</relative-time>
      </span>
      <div>
        <img alt="@karlis-i" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/1069633?v=3&amp;s=40" width="20" />
        <a href="/karlis-i" class="user-mention" rel="contributor">karlis-i</a>
          <a href="/StudioJunkyard/summernote-image-attributes/commit/a071d9a310fcc7d390ad611d59b2342533dd18a3" class="message" data-pjax="true" title="Added plugin options for customizing Image Attributes form

Added options to customize Image Attributes form:
```javascript
    displayFields:{
      imageBasic:true, // show/hide Title, Source, Alt fields
      imageExtra:false, // show/hide Alt, Class, Style, Role fields
      linkBasic:true, // show/hide URL and Target fields for link
      linkExtra:false // show/hide Class, Rel, Role fields for link
    }
```">Added plugin options for customizing Image Attributes form</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>7</strong>
         contributors
      </button>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="StudioJunkyard" href="/StudioJunkyard/summernote-image-attributes/commits/master/summernote-image-attributes.js?author=StudioJunkyard"><img alt="@StudioJunkyard" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/841740?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="yumewang" href="/StudioJunkyard/summernote-image-attributes/commits/master/summernote-image-attributes.js?author=yumewang"><img alt="@yumewang" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/2267888?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="paolodadda" href="/StudioJunkyard/summernote-image-attributes/commits/master/summernote-image-attributes.js?author=paolodadda"><img alt="@paolodadda" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/8592651?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="ninidc" href="/StudioJunkyard/summernote-image-attributes/commits/master/summernote-image-attributes.js?author=ninidc"><img alt="@ninidc" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/3115273?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="karlis-i" href="/StudioJunkyard/summernote-image-attributes/commits/master/summernote-image-attributes.js?author=karlis-i"><img alt="@karlis-i" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/1069633?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="horkenw" href="/StudioJunkyard/summernote-image-attributes/commits/master/summernote-image-attributes.js?author=horkenw"><img alt="@horkenw" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/9416799?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="b-alidra" href="/StudioJunkyard/summernote-image-attributes/commits/master/summernote-image-attributes.js?author=b-alidra"><img alt="@b-alidra" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/372249?v=3&amp;s=40" width="20" /> </a>


    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@StudioJunkyard" height="24" src="https://avatars2.githubusercontent.com/u/841740?v=3&amp;s=48" width="24" />
            <a href="/StudioJunkyard">StudioJunkyard</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@yumewang" height="24" src="https://avatars2.githubusercontent.com/u/2267888?v=3&amp;s=48" width="24" />
            <a href="/yumewang">yumewang</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@paolodadda" height="24" src="https://avatars2.githubusercontent.com/u/8592651?v=3&amp;s=48" width="24" />
            <a href="/paolodadda">paolodadda</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@ninidc" height="24" src="https://avatars1.githubusercontent.com/u/3115273?v=3&amp;s=48" width="24" />
            <a href="/ninidc">ninidc</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@karlis-i" height="24" src="https://avatars0.githubusercontent.com/u/1069633?v=3&amp;s=48" width="24" />
            <a href="/karlis-i">karlis-i</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@horkenw" height="24" src="https://avatars3.githubusercontent.com/u/9416799?v=3&amp;s=48" width="24" />
            <a href="/horkenw">horkenw</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@b-alidra" height="24" src="https://avatars3.githubusercontent.com/u/372249?v=3&amp;s=48" width="24" />
            <a href="/b-alidra">b-alidra</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a href="/StudioJunkyard/summernote-image-attributes/raw/master/summernote-image-attributes.js" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/StudioJunkyard/summernote-image-attributes/blame/master/summernote-image-attributes.js" class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b">Blame</a>
      <a href="/StudioJunkyard/summernote-image-attributes/commits/master/summernote-image-attributes.js" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="github-mac://openRepo/https://github.com/StudioJunkyard/summernote-image-attributes?branch=master&amp;filepath=summernote-image-attributes.js"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:mac">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
        </a>

        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/StudioJunkyard/summernote-image-attributes/edit/master/summernote-image-attributes.js" class="inline-form js-update-url-with-hash" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="9rtNUjptNngPTbaVrfFNl0fF4nWMG1yqLvkrSnhql6tiSU+PTO6LM2U1hDz51Y7t5swgbmN0gzcOOtGxA8MJtg==" /></div>
          <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
            aria-label="Edit the file in your fork of this project" data-hotkey="e" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
          </button>
</form>        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/StudioJunkyard/summernote-image-attributes/delete/master/summernote-image-attributes.js" class="inline-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="lPKMG03pIImhnTlstnlyE+P6Zo8kuERARG1OXKkdduFfZZuBQPTc7hWWwm8Iy6o2Q/PhuqQU/NGO9w6VZA/V6w==" /></div>
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Delete the file in your fork of this project" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
          </button>
</form>  </div>

  <div class="file-info">
      <span class="file-mode" title="File mode">executable file</span>
      <span class="file-info-divider"></span>
      620 lines (619 sloc)
      <span class="file-info-divider"></span>
    31.5 KB
  </div>
</div>

  

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Summernote Image Attributes</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * https://github.com/StudioJunkyard/summernote-image-attributes</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line">(<span class="pl-k">function</span>(<span class="pl-smi">factory</span>){</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span>(<span class="pl-k">typeof</span> define<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span><span class="pl-k">&amp;&amp;</span><span class="pl-smi">define</span>.<span class="pl-smi">amd</span>){</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">define</span>([<span class="pl-s"><span class="pl-pds">&#39;</span>jquery<span class="pl-pds">&#39;</span></span>],factory);</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line">  }<span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-k">typeof</span> <span class="pl-c1">module</span><span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span><span class="pl-k">&amp;&amp;</span><span class="pl-c1">module</span>.<span class="pl-smi">exports</span>){</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">module</span>.<span class="pl-smi">exports</span><span class="pl-k">=</span><span class="pl-en">factory</span>(<span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>jquery<span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">  }<span class="pl-k">else</span>{</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">factory</span>(<span class="pl-c1">window</span>.<span class="pl-smi">jQuery</span>);</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">}(<span class="pl-k">function</span>(<span class="pl-smi">$</span>){</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> <span class="pl-en">readFileAsDataURL</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">file</span>){</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-smi">$</span>.<span class="pl-en">Deferred</span>(<span class="pl-k">function</span>(<span class="pl-smi">deferred</span>){</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">$</span>.<span class="pl-en">extend</span>(<span class="pl-k">new</span> <span class="pl-en">FileReader</span>(),{</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">onload</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">e</span>){</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> sDataURL<span class="pl-k">=</span><span class="pl-smi">e</span>.<span class="pl-c1">target</span>.<span class="pl-smi">result</span>;</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">deferred</span>.<span class="pl-en">resolve</span>(sDataURL);</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">onerror</span><span class="pl-k">:</span><span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">deferred</span>.<span class="pl-en">reject</span>(<span class="pl-c1">this</span>);</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">      }).<span class="pl-en">readAsDataURL</span>(file);</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">    }).<span class="pl-en">promise</span>();</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">$</span>.<span class="pl-en">extend</span>(<span class="pl-c1">true</span>,<span class="pl-smi">$</span>.<span class="pl-smi">summernote</span>.<span class="pl-c1">lang</span>,{</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>en-US<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>{ <span class="pl-c">/* English */</span></td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">      imageAttributes<span class="pl-k">:</span>{</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">        dialogTitle<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Image Attributes<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">        tooltip<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Image Attributes<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">        pluginImageTitle<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Image Attributes<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">        pluginLinkTitle<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Link Attributes<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">        title<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Title<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">        src<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Source<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">        srcHelp<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Selecting an image will replace existing image with an Inlined Image.<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">        alt<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Alt<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">        class<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Class<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">        classSelect<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Select Class<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">        style<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Style<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">        role<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Role<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">        href<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>URL<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">        target<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Target<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">        linkClass<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Class<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">        linkRole<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Role<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">        rel<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Rel<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">        relBlank<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Do not use Rel Attribute<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">        relAlternate<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Alternate: Links to an alternate version of the document<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">        relAuthor<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Author: Links to the Author of the Document<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">        relBookmark<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Bookmark: Permanent URL used for Bookmarking<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">        relHelp<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Help: Links to a Help Document<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">        relLicense<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>License: Links to copyright information for the document<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">        relNext<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Next: The next document in a selection<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">        relNofollow<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>NoFollow: Links to an unendorsed document, like a paid link, also stops Search Engines following this link<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">        relNoreferrer<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>NoReferrer: Specifies that the browser should not send a HTTP Header<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">        relPrefetch<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>PreFetch: Specifies that the target document should be cached<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">        relPrev<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Prev: The previous document in a selection<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">        relSearch<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Search: Links to a search tool for the document<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">        relTag<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Tag: A tag (Keyword) for the current document<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>es-ES<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>{ <span class="pl-c">/* Spanish */</span></td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">      imageAttributes<span class="pl-k">:</span>{</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">        dialogTitle<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Propiedades de la Imagen<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">        tooltip<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Propiedades de la Imagen<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">        pluginImageTitle<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Atributos de la Imagen<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">        pluginLinkTitle<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Atributos del Enlace<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">        title<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Titulo<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">        src<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Fuente<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">        srcHelp<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>La selección de una imagen reemplazará la imagen existente con una imagen Inline.<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">        alt<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Alternativo<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">        class<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Clases<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">        classSelect<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Selecciona Forma<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">        style<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Estilo<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">        role<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Papel<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">        href<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>URL<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">        target<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Destino<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">        linkClass<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Clase<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">        linkRole<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Papel<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">        rel<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Rel<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">        relBlank<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>No usar atributo Rel<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">        relAlternate<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Alternate: Enlaza a una versión alternativa del documento<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">        relAuthor<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Author: Enlaza al autor del documento<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">        relBookmark<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Bookmark: URL permanente utilizada para enlazar<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">        relHelp<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Help: Enlaza a un documento de Ayuda<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">        relLicense<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>License: Enlaza a un documento de información de Copyright<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">        relNext<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Next: Enlaza al siguiente documento en una selección<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">        relNofollow<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>NoFollow: Enlaza a un documento no confirmado, como un enlace de pago, también evita que los buscadores sigan este enlace<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">        relNoreferrer<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>NoReferrer: Specifies that the browser should not send a HTTP Header<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">        relPrefetch<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>PreFetch: Specifies that the target document should be cached<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">        relPrev<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Prev: Enlaza al documento anterior en una selección<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">        relSearch<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Search: Enlaza a una herramienta de búsqueda para el documento<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">        relTag<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Tag: Un etiqueta (palabra clave) para el documento actual<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>fr-FR<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>{ <span class="pl-c">/* French */</span></td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line">      imageAttributes<span class="pl-k">:</span>{</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">        dialogTitle<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Attributs de l<span class="pl-cce">\&#39;</span>image<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line">        tooltip<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Attributs de l<span class="pl-cce">\&#39;</span>image<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line">        pluginImageTitle<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Attributs de l<span class="pl-cce">\&#39;</span>image<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line">        pluginLinkTitle<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Attributs du lien<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line">        title<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Titre<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line">        src<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>La source<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line">        srcHelp<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>La sélection d<span class="pl-cce">\&#39;</span>une image remplacera l<span class="pl-cce">\&#39;</span>image existante par une Image Inline.<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line">        alt<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Alt<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line">        class<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Class CSS<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line">        classSelect<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Choisir une Class<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line">        style<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Style<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line">        role<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Rôle<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line">        href<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>URL<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line">        target<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Cible<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line">        linkClass<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Class CSS du lien<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line">        linkRole<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Rôle<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line">        rel<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Lien Rel<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line">        relBlank<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Ne pas utiliser d<span class="pl-cce">\&#39;</span>attribut Rel<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line">        relAlternate<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Alternate: Lien vers une autre version du document<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line">        relAuthor<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Author: Lien vers l<span class="pl-cce">\&#39;</span>auteur du document<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line">        relBookmark<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Bookmark: Lien permant utilisé pour les signets<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line">        relHelp<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Help: Lien vers un document d<span class="pl-cce">\&#39;</span>aide<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line">        relLicense<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>License: Lien vers les informations de droits d<span class="pl-cce">\&#39;</span>auteur du document<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line">        relNext<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Next: La page suivante de ce document<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line">        relNofollow<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>NoFollow: Empêcher les moteurs de recherche de suivre ce lien<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line">        relNoreferrer<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>NoReferrer: Précise que le navigateur ne doit pas envoyer d<span class="pl-cce">\&#39;</span>entête HTTP<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line">        relPrefetch<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>PreFetch: Précise que le document cible doit être mis en cache<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line">        relPrev<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Prev: La page précédente de ce document<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line">        relSearch<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Search: Lien vers un outil de recherche du document<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line">        relTag<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Tag: Mot-clé du document<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>zh-TW<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>{ <span class="pl-c">/* Chinese */</span></td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line">      imageAttributes<span class="pl-k">:</span>{</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line">        dialogTitle<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>圖片提示<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line">        tooltip<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>圖片提示<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line">        pluginImageTitle<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>圖片屬性<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line">        pluginLinkTitle<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>連結屬性<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line">        title<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>標題<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line">        src<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>資源<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line">        srcHelp<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>選擇圖像將用內聯圖像替換現有圖像.<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line">        alt<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>圖片說明<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line">        class<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>类<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line">        classSelect<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>選擇 类<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line">        style<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>样式<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line">        role<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>角色<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line">        href<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>URL<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line">        target<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>目標<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line">        linkClass<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>連結樣式<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line">        linkRole<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>角色<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line">        rel<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>描述<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line">        relBlank<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>不使用連結說明<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line">        rel<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>不使用鏈結說明<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line">        relBlank<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>不使用鏈結說明<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line">        relAlternate<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>替代說明: 連至替代說明文件<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line">        relAuthor<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>作者: 連至來源位置<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line">        relBookmark<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>書籤: 提供加入書籤<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line">        relHelp<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>幫助: 連結至幫助文件<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line">        relLicense<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>版權: 連結至版權宣告頁面<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line">        relNext<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>下一步: 連結至下一個被選擇的頁面<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line">        relNofollow<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>不追蹤: 連結設置取消追蹤選項, 例如付費頁面, 並且禁止搜尋引擎追蹤該頁面<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line">        relNoreferrer<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>NoReferrer: 指定發送時取消 HTTP 的開頭<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line">        relPrefetch<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>預存: 指定該頁面啟用預存瀏覽<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line">        relPrev<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>上一步: 上一個被選擇的頁面<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line">        relSearch<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>搜尋: 連至搜尋文件<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line">        relTag<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>標籤: 為該文件設定標籤(關鍵字)<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>it-IT<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>{ <span class="pl-c">/* Italian */</span></td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line">      imageAttributes<span class="pl-k">:</span>{</td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line">        dialogTitle<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Attributi Immagine<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line">        tooltip<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Attributi Immagine<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line">        pluginImageTitle<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Attributi Immagine<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line">        pluginLinkTitle<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Attributi Collegamento<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line">        title<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Titolo<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line">        src<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Fonte<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line">        srcHelp<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>elezione di un<span class="pl-cce">\&#39;</span>immagine sostituirà immagine esistente con un inline Immagine.<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line">        alt<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Alt<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line">        class<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Classe<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line">        classSelect<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Seleziona Classe<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line">        style<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Stile<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line">        role<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Ruolo<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line">        href<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>URL<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line">        target<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Bersaglio<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line">        linkClass<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Classe per il collegamento<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code blob-code-inner js-file-line">        linkRole<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Ruolo<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code blob-code-inner js-file-line">        rel<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Link Rel<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code blob-code-inner js-file-line">        relBlank<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Non usare attributo Rel<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line">        relAlternate<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Alternate: Collegamento ad una versione alternativa del documento<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line">        relAuthor<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Author: Collegamento all<span class="pl-cce">\&#39;</span>autore del documento<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code blob-code-inner js-file-line">        relBookmark<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Bookmark: URL permanente per i preferiti<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code blob-code-inner js-file-line">        relHelp<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Help: Collegamento ad una pagina di aiuto per questo documento<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code blob-code-inner js-file-line">        relLicense<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>License: Collegamento alle informazioni sul copyright di questo docuemnto<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code blob-code-inner js-file-line">        relNext<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Next: Pagina successiva di questo documento<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code blob-code-inner js-file-line">        relNofollow<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>NoFollow: Impedisce ai motori di ricerca di seguire questo collegamento<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code blob-code-inner js-file-line">        relNoreferrer<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>NoReferrer: Specifica al browser di non inviare Header HTTP<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code blob-code-inner js-file-line">        relPrefetch<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>PreFetch: Specifica che il documento di destinazione deve essere memorizzato nella cache<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code blob-code-inner js-file-line">        relPrev<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Prev: Pagina precedente di questo documento<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code blob-code-inner js-file-line">        relSearch<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Search: Collegamenti a uno strumento di ricerca per questo documento<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code blob-code-inner js-file-line">        relTag<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Tag: Un tag (parola chiave) per questo documento<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>de-DE<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>{ <span class="pl-c">/* German */</span></td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code blob-code-inner js-file-line">      imageAttributes<span class="pl-k">:</span>{</td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code blob-code-inner js-file-line">        dialogTitle<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Bild Eigenschaften<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code blob-code-inner js-file-line">        tooltip<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Bild Eigenschaften<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code blob-code-inner js-file-line">        pluginImageTitle<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Bild Eigenschaften<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code blob-code-inner js-file-line">        pluginLinkTitle<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Link Eigenschaften<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code blob-code-inner js-file-line">        title<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Titel<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code blob-code-inner js-file-line">        src<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Quelle<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code blob-code-inner js-file-line">        srcHelp<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Wenn Sie ein Bild auswählen, wird das bestehende Bild durch ein Inlined Image ersetzt.<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code blob-code-inner js-file-line">        alt<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Alt Tag<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code blob-code-inner js-file-line">        class<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>CSS Klasse<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code blob-code-inner js-file-line">        classSelect<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>w&amp;auml;hle CSS Klasse<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code blob-code-inner js-file-line">        style<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Stil<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code blob-code-inner js-file-line">        role<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Rolle<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code blob-code-inner js-file-line">        href<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>URL<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code blob-code-inner js-file-line">        target<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Ziel (target)<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code blob-code-inner js-file-line">        linkClass<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>CSS Link Klasse<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code blob-code-inner js-file-line">        linkRole<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Ruolo<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code blob-code-inner js-file-line">        rel<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Link Beziehung (Relation)<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code blob-code-inner js-file-line">        relBlank<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Keine Link Beziehung<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code blob-code-inner js-file-line">        relAlternate<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Alternate: Link zu einer alternativen Version<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code blob-code-inner js-file-line">        relAuthor<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Author: Link zum Autor des Artikels<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code blob-code-inner js-file-line">        relBookmark<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Bookmark: Permanent URL f&amp;uuml;r Lesezeichen<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code blob-code-inner js-file-line">        relHelp<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Help: Link zur Hilfe<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code blob-code-inner js-file-line">        relLicense<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>License: Link zu Urheber und Lizenzinformationen<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code blob-code-inner js-file-line">        relNext<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Next: Die n&amp;auml;chste aktive Seite<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code blob-code-inner js-file-line">        relNofollow<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>NoFollow: Suchmaschinen sollen dem Link nicht folgen<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code blob-code-inner js-file-line">        relNoreferrer<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>NoReferrer: Browser soll keinen HTTP Header senden<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code blob-code-inner js-file-line">        relPrefetch<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>PreFetch: Gibt an, dass die Seite gecacht werden soll<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code blob-code-inner js-file-line">        relPrev<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Prev: Die zuletzt aktive Seite<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code blob-code-inner js-file-line">        relSearch<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Search: Link zur Dokumentsuche<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code blob-code-inner js-file-line">        relTag<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Tag: Ein Schl&amp;uuml;sselwort (keyword) f&amp;uuml;r diese Seite<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>tr-TR<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span>{ <span class="pl-c">/* Turkish */</span></td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code blob-code-inner js-file-line">      imageAttributes<span class="pl-k">:</span>{</td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code blob-code-inner js-file-line">        dialogTitle<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Resim Özellikleri<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code blob-code-inner js-file-line">        tooltip<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Resim Özellikleri<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code blob-code-inner js-file-line">        pluginImageTitle<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Resim Özellikleri<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code blob-code-inner js-file-line">        pluginLinkTitle<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Bağlantı Özellikleri<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code blob-code-inner js-file-line">        title<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Başlık<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code blob-code-inner js-file-line">        src<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Kaynak<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code blob-code-inner js-file-line">        srcHelp<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Bir görüntüyü seçmek, var olan resmi Inlined Image ile değiştirecektir.<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code blob-code-inner js-file-line">        alt<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Alt. Metin<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code blob-code-inner js-file-line">        class<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Sınıf<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code blob-code-inner js-file-line">        classSelect<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Sınıf Seçin<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code blob-code-inner js-file-line">        style<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Stil<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code blob-code-inner js-file-line">        role<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Rol<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code blob-code-inner js-file-line">        href<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>URL<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code blob-code-inner js-file-line">        target<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Hedef<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code blob-code-inner js-file-line">        linkClass<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Bağlantı Sınıfı<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code blob-code-inner js-file-line">        linkRole<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Rol<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code blob-code-inner js-file-line">        rel<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Bağlantı İlişkisi(Rel)<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code blob-code-inner js-file-line">        relBlank<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>İlişki özelliğini kullanma<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code blob-code-inner js-file-line">        relAlternate<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Alternatif: Belgenin farklı bir versiyonuna bağlantı<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code blob-code-inner js-file-line">        relAuthor<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Yazar: Belgenin yazarına bağlantı<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code blob-code-inner js-file-line">        relBookmark<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Yer İmi: Yer İmi eklemek için kalıcı adres<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code blob-code-inner js-file-line">        relHelp<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Yardım: Yardım dökümanına giden bağlantı<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code blob-code-inner js-file-line">        relLicense<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Lisans: Belgenin telif hakkı bilgisine bağlantı<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code blob-code-inner js-file-line">        relNext<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Sonraki: Sıradaki belgeye giden bağlantı<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code blob-code-inner js-file-line">        relNofollow<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Takip Etme (NoFollow): Arama motorlarının bu bağlantıyı takip etmemesini sağlar<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code blob-code-inner js-file-line">        relNoreferrer<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Referanssız (NoReferrer): Tarayıcının bu bağlantıya referans adresi göndermemesi gerektiğini belirtir<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code blob-code-inner js-file-line">        relPrefetch<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>ÖnBellek(PreFetch): Hedef bağlantının ön belleğe alınması gerektiğini belirtir<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code blob-code-inner js-file-line">        relPrev<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Önceki: Önceki belgeye giden bağlantı<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code blob-code-inner js-file-line">        relSearch<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Arama: Belge için bir arama aracına bağlantı olduğunu belirtir.<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code blob-code-inner js-file-line">        relTag<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Etiket: Belge için bir etiket olduğunu belirtir<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code blob-code-inner js-file-line">  });</td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">$</span>.<span class="pl-en">extend</span>(<span class="pl-smi">$</span>.<span class="pl-smi">summernote</span>.<span class="pl-c1">options</span>,{</td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code blob-code-inner js-file-line">    imageDialogLayout<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>default<span class="pl-pds">&#39;</span></span>, <span class="pl-c">/* default|horizontal */</span></td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code blob-code-inner js-file-line">    imageAttributes<span class="pl-k">:</span>{</td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code blob-code-inner js-file-line">      icon<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;i class=&quot;note-icon-pencil&quot;/&gt;<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code blob-code-inner js-file-line">      removeEmpty<span class="pl-k">:</span><span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code blob-code-inner js-file-line">    displayFields<span class="pl-k">:</span>{</td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code blob-code-inner js-file-line">      imageBasic<span class="pl-k">:</span><span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code blob-code-inner js-file-line">      imageExtra<span class="pl-k">:</span><span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code blob-code-inner js-file-line">      linkBasic<span class="pl-k">:</span><span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code blob-code-inner js-file-line">      linkExtra<span class="pl-k">:</span><span class="pl-c1">false</span></td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code blob-code-inner js-file-line">  });</td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">$</span>.<span class="pl-en">extend</span>(<span class="pl-smi">$</span>.<span class="pl-smi">summernote</span>.<span class="pl-c1">plugins</span>,{</td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-en">imageAttributes</span><span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">context</span>){</td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> self<span class="pl-k">=</span><span class="pl-c1">this</span>;</td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> ui<span class="pl-k">=</span><span class="pl-smi">$</span>.<span class="pl-smi">summernote</span>.<span class="pl-smi">ui</span>;</td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> $note<span class="pl-k">=</span><span class="pl-smi">context</span>.<span class="pl-smi">layoutInfo</span>.<span class="pl-smi">note</span>;</td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> $editor<span class="pl-k">=</span><span class="pl-smi">context</span>.<span class="pl-smi">layoutInfo</span>.<span class="pl-smi">editor</span>;</td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> $editable<span class="pl-k">=</span><span class="pl-smi">context</span>.<span class="pl-smi">layoutInfo</span>.<span class="pl-smi">editable</span>;</td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> options<span class="pl-k">=</span><span class="pl-smi">context</span>.<span class="pl-c1">options</span>;</td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> lang<span class="pl-k">=</span><span class="pl-smi">options</span>.<span class="pl-smi">langInfo</span>;</td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> imageLimitation<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span>(<span class="pl-smi">options</span>.<span class="pl-smi">maximumImageFileSize</span>){</td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> unit<span class="pl-k">=</span><span class="pl-c1">Math</span>.<span class="pl-c1">floor</span>(<span class="pl-c1">Math</span>.<span class="pl-c1">log</span>(<span class="pl-smi">options</span>.<span class="pl-smi">maximumImageFileSize</span>)<span class="pl-k">/</span><span class="pl-c1">Math</span>.<span class="pl-c1">log</span>(<span class="pl-c1">1024</span>));</td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> readableSize<span class="pl-k">=</span>(<span class="pl-smi">options</span>.<span class="pl-smi">maximumImageFileSize</span><span class="pl-k">/</span><span class="pl-c1">Math</span>.<span class="pl-c1">pow</span>(<span class="pl-c1">1024</span>,unit)).<span class="pl-en">toFixed</span>(<span class="pl-c1">2</span>)<span class="pl-k">*</span><span class="pl-c1">1</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span> KMGTP<span class="pl-pds">&#39;</span></span>[unit]<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>B<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code blob-code-inner js-file-line">        imageLimitation<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;small&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">lang</span>.<span class="pl-smi">image</span>.<span class="pl-smi">maximumFileSize</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span> : <span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>readableSize<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/small&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">context</span>.<span class="pl-en">memo</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>button.imageAttributes<span class="pl-pds">&#39;</span></span>,<span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> button<span class="pl-k">=</span><span class="pl-smi">ui</span>.<span class="pl-en">button</span>({</td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code blob-code-inner js-file-line">          contents<span class="pl-k">:</span><span class="pl-smi">options</span>.<span class="pl-smi">imageAttributes</span>.<span class="pl-smi">icon</span>,</td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code blob-code-inner js-file-line">          tooltip<span class="pl-k">:</span><span class="pl-smi">lang</span>.<span class="pl-smi">imageAttributes</span>.<span class="pl-smi">tooltip</span>,</td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">click</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">e</span>){</td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">context</span>.<span class="pl-en">invoke</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>imageAttributes.show<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code blob-code-inner js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-smi">button</span>.<span class="pl-en">render</span>();</td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code blob-code-inner js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">this</span>.<span class="pl-en">initialize</span><span class="pl-k">=</span><span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> $container<span class="pl-k">=</span><span class="pl-smi">options</span>.<span class="pl-smi">dialogsInBody</span><span class="pl-k">?</span><span class="pl-en">$</span>(<span class="pl-c1">document</span>.<span class="pl-c1">body</span>)<span class="pl-k">:</span>$editor;</td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span>(<span class="pl-smi">options</span>.<span class="pl-smi">imageDialogLayout</span><span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&#39;</span>horizontal<span class="pl-pds">&#39;</span></span>){</td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> body<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;dl class=&quot;dl-horizontal&quot;&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> (<span class="pl-smi">options</span>.<span class="pl-smi">displayFields</span>.<span class="pl-smi">imageBasic</span>) {</td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code blob-code-inner js-file-line">              body <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;dt&gt;&lt;label for=&quot;note-image-attributes-title&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">lang</span>.<span class="pl-smi">imageAttributes</span>.<span class="pl-c1">title</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/label&gt;&lt;/dt&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;dd&gt;&lt;input type=&quot;text&quot; id=&quot;note-image-attributes-title&quot; class=&quot;note-image-attributes-title form-control&quot;&gt;&lt;/dd&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;dt&gt;&lt;label for=&quot;note-image-attributes-src&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">lang</span>.<span class="pl-smi">imageAttributes</span>.<span class="pl-smi">src</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/label&gt;&lt;/dt&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;dd&gt;&lt;input type=&quot;text&quot; id=&quot;note-image-attributes-src&quot; class=&quot;note-image-attributes-src form-control&quot;&gt;&lt;/dd&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;dt&gt;&lt;label for=&quot;note-group-select-from-files&quot;&gt;&lt;/label&gt;&lt;/dt&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;dd&gt;&lt;input type=&quot;file&quot; id=&quot;note-group-select-from-files&quot; name=&quot;file&quot; accept=&quot;image/*&quot; class=&quot;note-image-input form-control&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>imageLimitation<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/dd&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;dt&gt;&lt;/dt&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;dd&gt;&lt;small class=&quot;help-block&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">lang</span>.<span class="pl-smi">imageAttributes</span>.<span class="pl-smi">srcHelp</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/small&gt;&lt;/dd&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;dt&gt;&lt;label for=&quot;note-image-attributes-alt&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">lang</span>.<span class="pl-smi">imageAttributes</span>.<span class="pl-c1">alt</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/label&gt;&lt;/dt&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;dd&gt;&lt;input type=&quot;text&quot; id=&quot;note-image-attributes-alt&quot; class=&quot;note-image-attributes-alt form-control&quot;&gt;&lt;/dd&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> (<span class="pl-smi">options</span>.<span class="pl-smi">displayFields</span>.<span class="pl-smi">imageExtra</span>) {</td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code blob-code-inner js-file-line">              body <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;dt&gt;&lt;label for=&quot;note-image-attributes-class&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">lang</span>.<span class="pl-smi">imageAttributes</span>.<span class="pl-smi">class</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/label&gt;&lt;/dt&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;dd&gt;&lt;input type=&quot;text&quot; id=&quot;note-image-attributes-class&quot; class=&quot;note-image-attributes-class form-control&quot;&gt;&lt;/dd&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;dt&gt;&lt;label for=&quot;note-image-attributes-style&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">lang</span>.<span class="pl-smi">imageAttributes</span>.<span class="pl-c1">style</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/label&gt;&lt;/dt&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;dd&gt;&lt;input type=&quot;text&quot; id=&quot;note-image-attributes-style&quot; class=&quot;note-image-attributes-style form-control&quot;&gt;&lt;/dd&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L328" class="blob-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;dt&gt;&lt;label for=&quot;note-image-attributes-role&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">lang</span>.<span class="pl-smi">imageAttributes</span>.<span class="pl-smi">role</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/label&gt;&lt;/dt&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L329" class="blob-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;dd&gt;&lt;input type=&quot;text&quot; id=&quot;note-image-attributes-role&quot; class=&quot;note-image-attributes-role form-control&quot;&gt;&lt;/dd&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L330" class="blob-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L331" class="blob-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-code blob-code-inner js-file-line">          body <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/dl&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L332" class="blob-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;hr&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L333" class="blob-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> (<span class="pl-smi">options</span>.<span class="pl-smi">displayFields</span>.<span class="pl-smi">linkBasic</span>) {</td>
      </tr>
      <tr>
        <td id="L334" class="blob-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-code blob-code-inner js-file-line">              body <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;h4&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">lang</span>.<span class="pl-smi">imageAttributes</span>.<span class="pl-smi">pluginLinkTitle</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/h4&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L335" class="blob-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;dl class=&quot;dl-horizontal&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L336" class="blob-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;dt&gt;&lt;label for=&quot;note-image-attributes-link-href&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">lang</span>.<span class="pl-smi">imageAttributes</span>.<span class="pl-c1">href</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/label&gt;&lt;/dt&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L337" class="blob-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;dd&gt;&lt;input type=&quot;text&quot; id=&quot;note-image-attributes-link-href&quot; class=&quot;note-image-attributes-href form-control&quot;&gt;&lt;/dd&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L338" class="blob-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;dt&gt;&lt;label for=&quot;note-image-attributes-link-target&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">lang</span>.<span class="pl-smi">imageAttributes</span>.<span class="pl-c1">target</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/label&gt;&lt;/dt&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L339" class="blob-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;dd&gt;&lt;select id=&quot;note-image-attributes-link-target&quot; class=&quot;note-image-attributes-target form-control&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L340" class="blob-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;option value=&quot;_self&quot;&gt;Self&lt;/option&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L341" class="blob-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;option value=&quot;_blank&quot;&gt;Blank&lt;/option&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L342" class="blob-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;option value=&quot;_top&quot;&gt;Top&lt;/option&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L343" class="blob-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;option value=&quot;_parent&quot;&gt;Parent&lt;/option&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L344" class="blob-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/select&gt;&lt;/dd&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L345" class="blob-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L346" class="blob-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> (<span class="pl-smi">options</span>.<span class="pl-smi">displayFields</span>.<span class="pl-smi">linkExtra</span>) {</td>
      </tr>
      <tr>
        <td id="L347" class="blob-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-code blob-code-inner js-file-line">              body <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;dt&gt;&lt;label for=&quot;note-image-attributes-link-class&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">lang</span>.<span class="pl-smi">imageAttributes</span>.<span class="pl-smi">linkClass</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/label&gt;&lt;/dt&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L348" class="blob-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;dd&gt;&lt;input type=&quot;text&quot; id=&quot;note-image-attributes-link-class&quot; class=&quot;note-image-attributes-link-class form-control&quot;&gt;&lt;/dd&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L349" class="blob-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;dt&gt;&lt;label for=&quot;note-image-attributes-link-rel&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">lang</span>.<span class="pl-smi">imageAttributes</span>.<span class="pl-c1">rel</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/label&gt;&lt;/dt&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L350" class="blob-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;dd&gt;&lt;select id=&quot;note-image-attributes-link-rel&quot; class=&quot;note-image-attributes-link-rel form-control&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L351" class="blob-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;option value=&quot;&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">lang</span>.<span class="pl-smi">imageAttributes</span>.<span class="pl-smi">relBlank</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/option&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L352" class="blob-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;option value=&quot;alternate&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">lang</span>.<span class="pl-smi">imageAttributes</span>.<span class="pl-smi">relAlternate</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/option&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L353" class="blob-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;option value=&quot;author&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">lang</span>.<span class="pl-smi">imageAttributes</span>.<span class="pl-smi">relAuthor</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/option&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L354" class="blob-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;option value=&quot;bookmark&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">lang</span>.<span class="pl-smi">imageAttributes</span>.<span class="pl-smi">relBookmark</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/option&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L355" class="blob-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;option value=&quot;help&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">lang</span>.<span class="pl-smi">imageAttributes</span>.<span class="pl-smi">relHelp</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/option&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L356" class="blob-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;option value=&quot;license&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">lang</span>.<span class="pl-smi">imageAttributes</span>.<span class="pl-smi">relLicense</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/option&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L357" class="blob-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;option value=&quot;next&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">lang</span>.<span class="pl-smi">imageAttributes</span>.<span class="pl-smi">relNext</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/option&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L358" class="blob-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;option value=&quot;nofollow&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">lang</span>.<span class="pl-smi">imageAttributes</span>.<span class="pl-smi">relNofollow</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/option&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L359" class="blob-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;option value=&quot;noreferrer&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">lang</span>.<span class="pl-smi">imageAttributes</span>.<span class="pl-smi">relNoreferrer</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/option&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L360" class="blob-num js-line-number" data-line-number="360"></td>
        <td id="LC360" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;option value=&quot;prefetch&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">lang</span>.<span class="pl-smi">imageAttributes</span>.<span class="pl-smi">relPrefetch</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/option&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L361" class="blob-num js-line-number" data-line-number="361"></td>
        <td id="LC361" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;option value=&quot;prev&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">lang</span>.<span class="pl-smi">imageAttributes</span>.<span class="pl-smi">relPrev</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/option&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L362" class="blob-num js-line-number" data-line-number="362"></td>
        <td id="LC362" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;option value=&quot;search&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">lang</span>.<span class="pl-smi">imageAttributes</span>.<span class="pl-smi">relSearch</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/option&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L363" class="blob-num js-line-number" data-line-number="363"></td>
        <td id="LC363" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;option value=&quot;tag&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">lang</span>.<span class="pl-smi">imageAttributes</span>.<span class="pl-smi">relTag</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/option&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L364" class="blob-num js-line-number" data-line-number="364"></td>
        <td id="LC364" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/select&gt;&lt;/dd&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L365" class="blob-num js-line-number" data-line-number="365"></td>
        <td id="LC365" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;dt&gt;&lt;label for=&quot;note-image-attributes-link-role&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">lang</span>.<span class="pl-smi">imageAttributes</span>.<span class="pl-smi">linkRole</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/label&gt;&lt;/dt&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L366" class="blob-num js-line-number" data-line-number="366"></td>
        <td id="LC366" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;dd&gt;&lt;input type=&quot;text&quot; id=&quot;note-image-attributes-link-role&quot; class=&quot;note-image-attributes-link-role form-control&quot;&gt;&lt;/dd&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L367" class="blob-num js-line-number" data-line-number="367"></td>
        <td id="LC367" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L368" class="blob-num js-line-number" data-line-number="368"></td>
        <td id="LC368" class="blob-code blob-code-inner js-file-line">          body <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/dl&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L369" class="blob-num js-line-number" data-line-number="369"></td>
        <td id="LC369" class="blob-code blob-code-inner js-file-line">        }<span class="pl-k">else</span>{</td>
      </tr>
      <tr>
        <td id="L370" class="blob-num js-line-number" data-line-number="370"></td>
        <td id="LC370" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> body<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;form-group&quot;&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L371" class="blob-num js-line-number" data-line-number="371"></td>
        <td id="LC371" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> (<span class="pl-smi">options</span>.<span class="pl-smi">displayFields</span>.<span class="pl-smi">imageBasic</span>) {</td>
      </tr>
      <tr>
        <td id="L372" class="blob-num js-line-number" data-line-number="372"></td>
        <td id="LC372" class="blob-code blob-code-inner js-file-line">              body <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;label for=&quot;note-image-attributes-title&quot; class=&quot;control-label col-xs-2&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">lang</span>.<span class="pl-smi">imageAttributes</span>.<span class="pl-c1">title</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/label&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L373" class="blob-num js-line-number" data-line-number="373"></td>
        <td id="LC373" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;input-group col-xs-10&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L374" class="blob-num js-line-number" data-line-number="374"></td>
        <td id="LC374" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;input type=&quot;text&quot; id=&quot;note-image-attributes-title&quot; class=&quot;note-image-attributes-title form-control&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L375" class="blob-num js-line-number" data-line-number="375"></td>
        <td id="LC375" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/div&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L376" class="blob-num js-line-number" data-line-number="376"></td>
        <td id="LC376" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/div&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L377" class="blob-num js-line-number" data-line-number="377"></td>
        <td id="LC377" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;form-group&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L378" class="blob-num js-line-number" data-line-number="378"></td>
        <td id="LC378" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;label for=&quot;note-image-attributes-src&quot; class=&quot;control-label col-xs-2&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">lang</span>.<span class="pl-smi">imageAttributes</span>.<span class="pl-smi">src</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/label&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L379" class="blob-num js-line-number" data-line-number="379"></td>
        <td id="LC379" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;input-group col-xs-10&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L380" class="blob-num js-line-number" data-line-number="380"></td>
        <td id="LC380" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;input type=&quot;text&quot; id=&quot;note-image-attributes-src&quot; class=&quot;note-image-attributes-src form-control&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L381" class="blob-num js-line-number" data-line-number="381"></td>
        <td id="LC381" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/div&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L382" class="blob-num js-line-number" data-line-number="382"></td>
        <td id="LC382" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/div&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L383" class="blob-num js-line-number" data-line-number="383"></td>
        <td id="LC383" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;form-group note-group-select-from-files&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L384" class="blob-num js-line-number" data-line-number="384"></td>
        <td id="LC384" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;label class=&quot;control-label col-xs-2&quot;&gt;&lt;/label&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L385" class="blob-num js-line-number" data-line-number="385"></td>
        <td id="LC385" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;input-group col-xs-10&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L386" class="blob-num js-line-number" data-line-number="386"></td>
        <td id="LC386" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;input class=&quot;note-image-input form-control&quot; type=&quot;file&quot; name=&quot;file&quot; accept=&quot;image/*&quot; /&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>imageLimitation<span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L387" class="blob-num js-line-number" data-line-number="387"></td>
        <td id="LC387" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;small class=&quot;help-block&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">lang</span>.<span class="pl-smi">imageAttributes</span>.<span class="pl-smi">srcHelp</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/small&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L388" class="blob-num js-line-number" data-line-number="388"></td>
        <td id="LC388" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/div&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L389" class="blob-num js-line-number" data-line-number="389"></td>
        <td id="LC389" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/div&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L390" class="blob-num js-line-number" data-line-number="390"></td>
        <td id="LC390" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;form-group&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L391" class="blob-num js-line-number" data-line-number="391"></td>
        <td id="LC391" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;label for=&quot;note-image-attributes-alt&quot; class=&quot;control-label col-xs-2&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">lang</span>.<span class="pl-smi">imageAttributes</span>.<span class="pl-c1">alt</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/label&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L392" class="blob-num js-line-number" data-line-number="392"></td>
        <td id="LC392" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;input-group col-xs-10&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L393" class="blob-num js-line-number" data-line-number="393"></td>
        <td id="LC393" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;input type=&quot;text&quot; id=&quot;note-image-attributes-alt&quot; class=&quot;note-image-attributes-alt form-control&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L394" class="blob-num js-line-number" data-line-number="394"></td>
        <td id="LC394" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/div&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L395" class="blob-num js-line-number" data-line-number="395"></td>
        <td id="LC395" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/div&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L396" class="blob-num js-line-number" data-line-number="396"></td>
        <td id="LC396" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L397" class="blob-num js-line-number" data-line-number="397"></td>
        <td id="LC397" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> (<span class="pl-smi">options</span>.<span class="pl-smi">displayFields</span>.<span class="pl-smi">imageExtra</span>) {</td>
      </tr>
      <tr>
        <td id="L398" class="blob-num js-line-number" data-line-number="398"></td>
        <td id="LC398" class="blob-code blob-code-inner js-file-line">              body <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;form-group&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L399" class="blob-num js-line-number" data-line-number="399"></td>
        <td id="LC399" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;label for=&quot;note-image-attributes-class&quot; class=&quot;control-label col-xs-2&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">lang</span>.<span class="pl-smi">imageAttributes</span>.<span class="pl-smi">class</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/label&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L400" class="blob-num js-line-number" data-line-number="400"></td>
        <td id="LC400" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;input-group col-xs-10&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L401" class="blob-num js-line-number" data-line-number="401"></td>
        <td id="LC401" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;input type=&quot;text&quot; id=&quot;note-image-attributes-class&quot; class=&quot;note-image-attributes-class form-control&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L402" class="blob-num js-line-number" data-line-number="402"></td>
        <td id="LC402" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/div&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L403" class="blob-num js-line-number" data-line-number="403"></td>
        <td id="LC403" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/div&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L404" class="blob-num js-line-number" data-line-number="404"></td>
        <td id="LC404" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;form-group&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L405" class="blob-num js-line-number" data-line-number="405"></td>
        <td id="LC405" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;label for=&quot;note-image-attributes-style&quot; class=&quot;control-label col-xs-2&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">lang</span>.<span class="pl-smi">imageAttributes</span>.<span class="pl-c1">style</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/label&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L406" class="blob-num js-line-number" data-line-number="406"></td>
        <td id="LC406" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;input-group col-xs-10&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L407" class="blob-num js-line-number" data-line-number="407"></td>
        <td id="LC407" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;input type=&quot;text&quot; id=&quot;note-image-attributes-style&quot; class=&quot;note-image-attributes-style form-control&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L408" class="blob-num js-line-number" data-line-number="408"></td>
        <td id="LC408" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/div&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L409" class="blob-num js-line-number" data-line-number="409"></td>
        <td id="LC409" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/div&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L410" class="blob-num js-line-number" data-line-number="410"></td>
        <td id="LC410" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;form-group&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L411" class="blob-num js-line-number" data-line-number="411"></td>
        <td id="LC411" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;label for=&quot;note-image-attributes-role&quot; class=&quot;control-label col-xs-2&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">lang</span>.<span class="pl-smi">imageAttributes</span>.<span class="pl-smi">role</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/label&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L412" class="blob-num js-line-number" data-line-number="412"></td>
        <td id="LC412" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;input-group col-xs-10&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L413" class="blob-num js-line-number" data-line-number="413"></td>
        <td id="LC413" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;input type=&quot;text&quot; id=&quot;note-image-attributes-role&quot; class=&quot;note-image-attributes-role form-control&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L414" class="blob-num js-line-number" data-line-number="414"></td>
        <td id="LC414" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/div&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L415" class="blob-num js-line-number" data-line-number="415"></td>
        <td id="LC415" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/div&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L416" class="blob-num js-line-number" data-line-number="416"></td>
        <td id="LC416" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L417" class="blob-num js-line-number" data-line-number="417"></td>
        <td id="LC417" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> (<span class="pl-smi">options</span>.<span class="pl-smi">displayFields</span>.<span class="pl-smi">linkBasic</span> <span class="pl-k">||</span> <span class="pl-smi">options</span>.<span class="pl-smi">displayFields</span>.<span class="pl-smi">linkExtra</span>) {</td>
      </tr>
      <tr>
        <td id="L418" class="blob-num js-line-number" data-line-number="418"></td>
        <td id="LC418" class="blob-code blob-code-inner js-file-line">            body <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;h4&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">lang</span>.<span class="pl-smi">imageAttributes</span>.<span class="pl-smi">pluginLinkTitle</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/h4&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L419" class="blob-num js-line-number" data-line-number="419"></td>
        <td id="LC419" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;hr&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L420" class="blob-num js-line-number" data-line-number="420"></td>
        <td id="LC420" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L421" class="blob-num js-line-number" data-line-number="421"></td>
        <td id="LC421" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> (<span class="pl-smi">options</span>.<span class="pl-smi">displayFields</span>.<span class="pl-smi">linkBasic</span>) {</td>
      </tr>
      <tr>
        <td id="L422" class="blob-num js-line-number" data-line-number="422"></td>
        <td id="LC422" class="blob-code blob-code-inner js-file-line">              body <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;form-group&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L423" class="blob-num js-line-number" data-line-number="423"></td>
        <td id="LC423" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;label for=&quot;note-image-attributes-link-href&quot; class=&quot;control-label col-xs-2&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">lang</span>.<span class="pl-smi">imageAttributes</span>.<span class="pl-c1">href</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/label&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L424" class="blob-num js-line-number" data-line-number="424"></td>
        <td id="LC424" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;input-group col-xs-10&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L425" class="blob-num js-line-number" data-line-number="425"></td>
        <td id="LC425" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;input type=&quot;text&quot; id=&quot;note-image-attributes-link-href&quot; class=&quot;note-image-attributes-href form-control&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L426" class="blob-num js-line-number" data-line-number="426"></td>
        <td id="LC426" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/div&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L427" class="blob-num js-line-number" data-line-number="427"></td>
        <td id="LC427" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/div&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L428" class="blob-num js-line-number" data-line-number="428"></td>
        <td id="LC428" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;form-group&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L429" class="blob-num js-line-number" data-line-number="429"></td>
        <td id="LC429" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;label for=&quot;note-image-attributes-link-target&quot; class=&quot;control-label col-xs-2&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">lang</span>.<span class="pl-smi">imageAttributes</span>.<span class="pl-c1">target</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/label&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L430" class="blob-num js-line-number" data-line-number="430"></td>
        <td id="LC430" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;input-group col-xs-10&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L431" class="blob-num js-line-number" data-line-number="431"></td>
        <td id="LC431" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;select id=&quot;note-image-attributes-link-target&quot; class=&quot;note-image-attributes-target form-control&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L432" class="blob-num js-line-number" data-line-number="432"></td>
        <td id="LC432" class="blob-code blob-code-inner js-file-line">                  <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;option value=&quot;_self&quot;&gt;Self&lt;/option&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L433" class="blob-num js-line-number" data-line-number="433"></td>
        <td id="LC433" class="blob-code blob-code-inner js-file-line">                  <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;option value=&quot;_blank&quot;&gt;Blank&lt;/option&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L434" class="blob-num js-line-number" data-line-number="434"></td>
        <td id="LC434" class="blob-code blob-code-inner js-file-line">                  <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;option value=&quot;_top&quot;&gt;Top&lt;/option&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L435" class="blob-num js-line-number" data-line-number="435"></td>
        <td id="LC435" class="blob-code blob-code-inner js-file-line">                  <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;option value=&quot;_parent&quot;&gt;Parent&lt;/option&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L436" class="blob-num js-line-number" data-line-number="436"></td>
        <td id="LC436" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/select&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L437" class="blob-num js-line-number" data-line-number="437"></td>
        <td id="LC437" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/div&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L438" class="blob-num js-line-number" data-line-number="438"></td>
        <td id="LC438" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/div&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L439" class="blob-num js-line-number" data-line-number="439"></td>
        <td id="LC439" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L440" class="blob-num js-line-number" data-line-number="440"></td>
        <td id="LC440" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> (<span class="pl-smi">options</span>.<span class="pl-smi">displayFields</span>.<span class="pl-smi">linkExtra</span>) {</td>
      </tr>
      <tr>
        <td id="L441" class="blob-num js-line-number" data-line-number="441"></td>
        <td id="LC441" class="blob-code blob-code-inner js-file-line">              body <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;form-group&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L442" class="blob-num js-line-number" data-line-number="442"></td>
        <td id="LC442" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;label for=&quot;note-image-attributes-link-class&quot; class=&quot;control-label col-xs-2&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">lang</span>.<span class="pl-smi">imageAttributes</span>.<span class="pl-smi">linkClass</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/label&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L443" class="blob-num js-line-number" data-line-number="443"></td>
        <td id="LC443" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;input-group col-xs-10&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L444" class="blob-num js-line-number" data-line-number="444"></td>
        <td id="LC444" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;input type=&quot;text&quot; id=&quot;note-image-attributes-link-class&quot; class=&quot;note-image-attributes-link-class form-control&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L445" class="blob-num js-line-number" data-line-number="445"></td>
        <td id="LC445" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/div&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L446" class="blob-num js-line-number" data-line-number="446"></td>
        <td id="LC446" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/div&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L447" class="blob-num js-line-number" data-line-number="447"></td>
        <td id="LC447" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;form-group&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L448" class="blob-num js-line-number" data-line-number="448"></td>
        <td id="LC448" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;label for=&quot;note-image-attributes-link-rel&quot; class=&quot;control-label col-xs-2&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">lang</span>.<span class="pl-smi">imageAttributes</span>.<span class="pl-c1">rel</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/label&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L449" class="blob-num js-line-number" data-line-number="449"></td>
        <td id="LC449" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;input-group col-xs-10&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L450" class="blob-num js-line-number" data-line-number="450"></td>
        <td id="LC450" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;select id=&quot;note-image-attributes-link-rel&quot; class=&quot;note-image-attributes-link-rel form-control&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L451" class="blob-num js-line-number" data-line-number="451"></td>
        <td id="LC451" class="blob-code blob-code-inner js-file-line">                  <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;option value=&quot;&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">lang</span>.<span class="pl-smi">imageAttributes</span>.<span class="pl-smi">relBlank</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/option&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L452" class="blob-num js-line-number" data-line-number="452"></td>
        <td id="LC452" class="blob-code blob-code-inner js-file-line">                  <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;option value=&quot;alternate&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">lang</span>.<span class="pl-smi">imageAttributes</span>.<span class="pl-smi">relAlternate</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/option&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L453" class="blob-num js-line-number" data-line-number="453"></td>
        <td id="LC453" class="blob-code blob-code-inner js-file-line">                  <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;option value=&quot;author&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">lang</span>.<span class="pl-smi">imageAttributes</span>.<span class="pl-smi">relAuthor</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/option&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L454" class="blob-num js-line-number" data-line-number="454"></td>
        <td id="LC454" class="blob-code blob-code-inner js-file-line">                  <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;option value=&quot;bookmark&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">lang</span>.<span class="pl-smi">imageAttributes</span>.<span class="pl-smi">relBookmark</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/option&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L455" class="blob-num js-line-number" data-line-number="455"></td>
        <td id="LC455" class="blob-code blob-code-inner js-file-line">                  <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;option value=&quot;help&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">lang</span>.<span class="pl-smi">imageAttributes</span>.<span class="pl-smi">relHelp</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/option&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L456" class="blob-num js-line-number" data-line-number="456"></td>
        <td id="LC456" class="blob-code blob-code-inner js-file-line">                  <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;option value=&quot;license&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">lang</span>.<span class="pl-smi">imageAttributes</span>.<span class="pl-smi">relLicense</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/option&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L457" class="blob-num js-line-number" data-line-number="457"></td>
        <td id="LC457" class="blob-code blob-code-inner js-file-line">                  <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;option value=&quot;next&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">lang</span>.<span class="pl-smi">imageAttributes</span>.<span class="pl-smi">relNext</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/option&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L458" class="blob-num js-line-number" data-line-number="458"></td>
        <td id="LC458" class="blob-code blob-code-inner js-file-line">                  <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;option value=&quot;nofollow&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">lang</span>.<span class="pl-smi">imageAttributes</span>.<span class="pl-smi">relNofollow</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/option&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L459" class="blob-num js-line-number" data-line-number="459"></td>
        <td id="LC459" class="blob-code blob-code-inner js-file-line">                  <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;option value=&quot;noreferrer&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">lang</span>.<span class="pl-smi">imageAttributes</span>.<span class="pl-smi">relNoreferrer</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/option&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L460" class="blob-num js-line-number" data-line-number="460"></td>
        <td id="LC460" class="blob-code blob-code-inner js-file-line">                  <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;option value=&quot;prefetch&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">lang</span>.<span class="pl-smi">imageAttributes</span>.<span class="pl-smi">relPrefetch</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/option&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L461" class="blob-num js-line-number" data-line-number="461"></td>
        <td id="LC461" class="blob-code blob-code-inner js-file-line">                  <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;option value=&quot;prev&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">lang</span>.<span class="pl-smi">imageAttributes</span>.<span class="pl-smi">relPrev</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/option&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L462" class="blob-num js-line-number" data-line-number="462"></td>
        <td id="LC462" class="blob-code blob-code-inner js-file-line">                  <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;option value=&quot;search&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">lang</span>.<span class="pl-smi">imageAttributes</span>.<span class="pl-smi">relSearch</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/option&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L463" class="blob-num js-line-number" data-line-number="463"></td>
        <td id="LC463" class="blob-code blob-code-inner js-file-line">                  <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;option value=&quot;tag&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">lang</span>.<span class="pl-smi">imageAttributes</span>.<span class="pl-smi">relTag</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/option&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L464" class="blob-num js-line-number" data-line-number="464"></td>
        <td id="LC464" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/select&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L465" class="blob-num js-line-number" data-line-number="465"></td>
        <td id="LC465" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/div&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L466" class="blob-num js-line-number" data-line-number="466"></td>
        <td id="LC466" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/div&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L467" class="blob-num js-line-number" data-line-number="467"></td>
        <td id="LC467" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;form-group&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L468" class="blob-num js-line-number" data-line-number="468"></td>
        <td id="LC468" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;label for=&quot;note-image-attributes-link-role&quot; class=&quot;control-label col-xs-2&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">lang</span>.<span class="pl-smi">imageAttributes</span>.<span class="pl-smi">linkRole</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/label&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L469" class="blob-num js-line-number" data-line-number="469"></td>
        <td id="LC469" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;input-group col-xs-10&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L470" class="blob-num js-line-number" data-line-number="470"></td>
        <td id="LC470" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;input type=&quot;text&quot; id=&quot;note-image-attributes-link-role&quot; class=&quot;note-image-attributes-link-role form-control&quot;&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L471" class="blob-num js-line-number" data-line-number="471"></td>
        <td id="LC471" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/div&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L472" class="blob-num js-line-number" data-line-number="472"></td>
        <td id="LC472" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/div&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L473" class="blob-num js-line-number" data-line-number="473"></td>
        <td id="LC473" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L474" class="blob-num js-line-number" data-line-number="474"></td>
        <td id="LC474" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L475" class="blob-num js-line-number" data-line-number="475"></td>
        <td id="LC475" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-smi">$dialog</span><span class="pl-k">=</span><span class="pl-smi">ui</span>.<span class="pl-en">dialog</span>({</td>
      </tr>
      <tr>
        <td id="L476" class="blob-num js-line-number" data-line-number="476"></td>
        <td id="LC476" class="blob-code blob-code-inner js-file-line">          title<span class="pl-k">:</span><span class="pl-smi">lang</span>.<span class="pl-smi">imageAttributes</span>.<span class="pl-smi">dialogTitle</span>,</td>
      </tr>
      <tr>
        <td id="L477" class="blob-num js-line-number" data-line-number="477"></td>
        <td id="LC477" class="blob-code blob-code-inner js-file-line">          body<span class="pl-k">:</span>body,</td>
      </tr>
      <tr>
        <td id="L478" class="blob-num js-line-number" data-line-number="478"></td>
        <td id="LC478" class="blob-code blob-code-inner js-file-line">          footer<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;button href=&quot;#&quot; class=&quot;btn btn-primary note-image-attributes-btn&quot;&gt;OK&lt;/button&gt;<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L479" class="blob-num js-line-number" data-line-number="479"></td>
        <td id="LC479" class="blob-code blob-code-inner js-file-line">        }).<span class="pl-en">render</span>().<span class="pl-en">appendTo</span>($container);</td>
      </tr>
      <tr>
        <td id="L480" class="blob-num js-line-number" data-line-number="480"></td>
        <td id="LC480" class="blob-code blob-code-inner js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L481" class="blob-num js-line-number" data-line-number="481"></td>
        <td id="LC481" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">this</span>.<span class="pl-en">destroy</span><span class="pl-k">=</span><span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L482" class="blob-num js-line-number" data-line-number="482"></td>
        <td id="LC482" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">ui</span>.<span class="pl-en">hideDialog</span>(<span class="pl-c1">this</span>.<span class="pl-smi">$dialog</span>);</td>
      </tr>
      <tr>
        <td id="L483" class="blob-num js-line-number" data-line-number="483"></td>
        <td id="LC483" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-smi">$dialog</span>.<span class="pl-c1">remove</span>();</td>
      </tr>
      <tr>
        <td id="L484" class="blob-num js-line-number" data-line-number="484"></td>
        <td id="LC484" class="blob-code blob-code-inner js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L485" class="blob-num js-line-number" data-line-number="485"></td>
        <td id="LC485" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">this</span>.<span class="pl-en">bindEnterKey</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">$input</span>,<span class="pl-smi">$btn</span>){</td>
      </tr>
      <tr>
        <td id="L486" class="blob-num js-line-number" data-line-number="486"></td>
        <td id="LC486" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">$input</span>.<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>keypress<span class="pl-pds">&#39;</span></span>,<span class="pl-k">function</span>(<span class="pl-c1">event</span>){</td>
      </tr>
      <tr>
        <td id="L487" class="blob-num js-line-number" data-line-number="487"></td>
        <td id="LC487" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span>(<span class="pl-c1">event</span>.<span class="pl-smi">keyCode</span><span class="pl-k">===</span><span class="pl-c1">13</span>)<span class="pl-smi">$btn</span>.<span class="pl-en">trigger</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>click<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L488" class="blob-num js-line-number" data-line-number="488"></td>
        <td id="LC488" class="blob-code blob-code-inner js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L489" class="blob-num js-line-number" data-line-number="489"></td>
        <td id="LC489" class="blob-code blob-code-inner js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L490" class="blob-num js-line-number" data-line-number="490"></td>
        <td id="LC490" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">this</span>.<span class="pl-en">bindLabels</span><span class="pl-k">=</span><span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L491" class="blob-num js-line-number" data-line-number="491"></td>
        <td id="LC491" class="blob-code blob-code-inner js-file-line">      	<span class="pl-smi">self</span>.<span class="pl-smi">$dialog</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.form-control:first<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">focus</span>().<span class="pl-c1">select</span>();</td>
      </tr>
      <tr>
        <td id="L492" class="blob-num js-line-number" data-line-number="492"></td>
        <td id="LC492" class="blob-code blob-code-inner js-file-line">      	<span class="pl-smi">self</span>.<span class="pl-smi">$dialog</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>label<span class="pl-pds">&#39;</span></span>).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>click<span class="pl-pds">&#39;</span></span>,<span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L493" class="blob-num js-line-number" data-line-number="493"></td>
        <td id="LC493" class="blob-code blob-code-inner js-file-line">      		<span class="pl-en">$</span>(<span class="pl-c1">this</span>).<span class="pl-c1">parent</span>().<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.form-control:first<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">focus</span>();</td>
      </tr>
      <tr>
        <td id="L494" class="blob-num js-line-number" data-line-number="494"></td>
        <td id="LC494" class="blob-code blob-code-inner js-file-line">      	});</td>
      </tr>
      <tr>
        <td id="L495" class="blob-num js-line-number" data-line-number="495"></td>
        <td id="LC495" class="blob-code blob-code-inner js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L496" class="blob-num js-line-number" data-line-number="496"></td>
        <td id="LC496" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">this</span>.<span class="pl-en">show</span><span class="pl-k">=</span><span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L497" class="blob-num js-line-number" data-line-number="497"></td>
        <td id="LC497" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> $img<span class="pl-k">=</span><span class="pl-en">$</span>(<span class="pl-smi">$editable</span>.<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>target<span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L498" class="blob-num js-line-number" data-line-number="498"></td>
        <td id="LC498" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> imgInfo<span class="pl-k">=</span>{</td>
      </tr>
      <tr>
        <td id="L499" class="blob-num js-line-number" data-line-number="499"></td>
        <td id="LC499" class="blob-code blob-code-inner js-file-line">          imgDom<span class="pl-k">:</span>$img,</td>
      </tr>
      <tr>
        <td id="L500" class="blob-num js-line-number" data-line-number="500"></td>
        <td id="LC500" class="blob-code blob-code-inner js-file-line">          title<span class="pl-k">:</span><span class="pl-smi">$img</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>title<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L501" class="blob-num js-line-number" data-line-number="501"></td>
        <td id="LC501" class="blob-code blob-code-inner js-file-line">          src<span class="pl-k">:</span><span class="pl-smi">$img</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>src<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L502" class="blob-num js-line-number" data-line-number="502"></td>
        <td id="LC502" class="blob-code blob-code-inner js-file-line">          alt<span class="pl-k">:</span><span class="pl-smi">$img</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>alt<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L503" class="blob-num js-line-number" data-line-number="503"></td>
        <td id="LC503" class="blob-code blob-code-inner js-file-line">          role<span class="pl-k">:</span><span class="pl-smi">$img</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>role<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L504" class="blob-num js-line-number" data-line-number="504"></td>
        <td id="LC504" class="blob-code blob-code-inner js-file-line">          class<span class="pl-k">:</span><span class="pl-smi">$img</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>class<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L505" class="blob-num js-line-number" data-line-number="505"></td>
        <td id="LC505" class="blob-code blob-code-inner js-file-line">          style<span class="pl-k">:</span><span class="pl-smi">$img</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>style<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L506" class="blob-num js-line-number" data-line-number="506"></td>
        <td id="LC506" class="blob-code blob-code-inner js-file-line">          imgLink<span class="pl-k">:</span><span class="pl-en">$</span>(<span class="pl-smi">$img</span>.<span class="pl-smi">context</span>).<span class="pl-c1">parent</span>().<span class="pl-en">is</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>a<span class="pl-pds">&quot;</span></span>)<span class="pl-k">?</span><span class="pl-en">$</span>(<span class="pl-smi">$img</span>.<span class="pl-smi">context</span>).<span class="pl-c1">parent</span>()<span class="pl-k">:</span><span class="pl-c1">null</span></td>
      </tr>
      <tr>
        <td id="L507" class="blob-num js-line-number" data-line-number="507"></td>
        <td id="LC507" class="blob-code blob-code-inner js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L508" class="blob-num js-line-number" data-line-number="508"></td>
        <td id="LC508" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">showLinkDialog</span>(imgInfo)</td>
      </tr>
      <tr>
        <td id="L509" class="blob-num js-line-number" data-line-number="509"></td>
        <td id="LC509" class="blob-code blob-code-inner js-file-line">            .<span class="pl-en">then</span>(<span class="pl-k">function</span>(<span class="pl-smi">imgInfo</span>){</td>
      </tr>
      <tr>
        <td id="L510" class="blob-num js-line-number" data-line-number="510"></td>
        <td id="LC510" class="blob-code blob-code-inner js-file-line">              <span class="pl-smi">ui</span>.<span class="pl-en">hideDialog</span>(<span class="pl-smi">self</span>.<span class="pl-smi">$dialog</span>);</td>
      </tr>
      <tr>
        <td id="L511" class="blob-num js-line-number" data-line-number="511"></td>
        <td id="LC511" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">var</span> $img<span class="pl-k">=</span><span class="pl-smi">imgInfo</span>.<span class="pl-smi">imgDom</span>;</td>
      </tr>
      <tr>
        <td id="L512" class="blob-num js-line-number" data-line-number="512"></td>
        <td id="LC512" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">if</span>(<span class="pl-smi">options</span>.<span class="pl-smi">imageAttributes</span>.<span class="pl-smi">removeEmpty</span>){</td>
      </tr>
      <tr>
        <td id="L513" class="blob-num js-line-number" data-line-number="513"></td>
        <td id="LC513" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span>(<span class="pl-smi">imgInfo</span>.<span class="pl-c1">alt</span>)<span class="pl-smi">$img</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>alt<span class="pl-pds">&#39;</span></span>,<span class="pl-smi">imgInfo</span>.<span class="pl-c1">alt</span>);<span class="pl-k">else</span> <span class="pl-smi">$img</span>.<span class="pl-en">removeAttr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>alt<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L514" class="blob-num js-line-number" data-line-number="514"></td>
        <td id="LC514" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span>(<span class="pl-smi">imgInfo</span>.<span class="pl-c1">title</span>)<span class="pl-smi">$img</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>title<span class="pl-pds">&#39;</span></span>,<span class="pl-smi">imgInfo</span>.<span class="pl-c1">title</span>);<span class="pl-k">else</span> <span class="pl-smi">$img</span>.<span class="pl-en">removeAttr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>title<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L515" class="blob-num js-line-number" data-line-number="515"></td>
        <td id="LC515" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span>(<span class="pl-smi">imgInfo</span>.<span class="pl-smi">src</span>)<span class="pl-smi">$img</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>src<span class="pl-pds">&#39;</span></span>,<span class="pl-smi">imgInfo</span>.<span class="pl-smi">src</span>);<span class="pl-k">else</span> <span class="pl-smi">$img</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>src<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>#<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L516" class="blob-num js-line-number" data-line-number="516"></td>
        <td id="LC516" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span>(<span class="pl-smi">imgInfo</span>.<span class="pl-smi">class</span>)<span class="pl-smi">$img</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>class<span class="pl-pds">&#39;</span></span>,<span class="pl-smi">imgInfo</span>.<span class="pl-smi">class</span>);<span class="pl-k">else</span> <span class="pl-smi">$img</span>.<span class="pl-en">removeAttr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>class<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L517" class="blob-num js-line-number" data-line-number="517"></td>
        <td id="LC517" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span>(<span class="pl-smi">imgInfo</span>.<span class="pl-c1">style</span>)<span class="pl-smi">$img</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>style<span class="pl-pds">&#39;</span></span>,<span class="pl-smi">imgInfo</span>.<span class="pl-c1">style</span>);<span class="pl-k">else</span> <span class="pl-smi">$img</span>.<span class="pl-en">removeAttr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>style<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L518" class="blob-num js-line-number" data-line-number="518"></td>
        <td id="LC518" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span>(<span class="pl-smi">imgInfo</span>.<span class="pl-smi">role</span>)<span class="pl-smi">$img</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>role<span class="pl-pds">&#39;</span></span>,<span class="pl-smi">imgInfo</span>.<span class="pl-smi">role</span>);<span class="pl-k">else</span> <span class="pl-smi">$img</span>.<span class="pl-en">removeAttr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>role<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L519" class="blob-num js-line-number" data-line-number="519"></td>
        <td id="LC519" class="blob-code blob-code-inner js-file-line">              }<span class="pl-k">else</span>{</td>
      </tr>
      <tr>
        <td id="L520" class="blob-num js-line-number" data-line-number="520"></td>
        <td id="LC520" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">$img</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>alt<span class="pl-pds">&#39;</span></span>,<span class="pl-smi">imgInfo</span>.<span class="pl-c1">alt</span>);</td>
      </tr>
      <tr>
        <td id="L521" class="blob-num js-line-number" data-line-number="521"></td>
        <td id="LC521" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">$img</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>title<span class="pl-pds">&#39;</span></span>,<span class="pl-smi">imgInfo</span>.<span class="pl-c1">title</span>);</td>
      </tr>
      <tr>
        <td id="L522" class="blob-num js-line-number" data-line-number="522"></td>
        <td id="LC522" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">$img</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>class<span class="pl-pds">&#39;</span></span>,<span class="pl-smi">imgInfo</span>.<span class="pl-smi">class</span>);</td>
      </tr>
      <tr>
        <td id="L523" class="blob-num js-line-number" data-line-number="523"></td>
        <td id="LC523" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">$img</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>style<span class="pl-pds">&#39;</span></span>,<span class="pl-smi">imgInfo</span>.<span class="pl-c1">style</span>);</td>
      </tr>
      <tr>
        <td id="L524" class="blob-num js-line-number" data-line-number="524"></td>
        <td id="LC524" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">$img</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>role<span class="pl-pds">&#39;</span></span>,<span class="pl-smi">imgInfo</span>.<span class="pl-smi">role</span>);</td>
      </tr>
      <tr>
        <td id="L525" class="blob-num js-line-number" data-line-number="525"></td>
        <td id="LC525" class="blob-code blob-code-inner js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L526" class="blob-num js-line-number" data-line-number="526"></td>
        <td id="LC526" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">if</span>(<span class="pl-smi">$img</span>.<span class="pl-c1">parent</span>().<span class="pl-en">is</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>a<span class="pl-pds">&quot;</span></span>))<span class="pl-smi">$img</span>.<span class="pl-en">unwrap</span>();</td>
      </tr>
      <tr>
        <td id="L527" class="blob-num js-line-number" data-line-number="527"></td>
        <td id="LC527" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">var</span> hrefRegex<span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">RegExp</span>(<span class="pl-sr"><span class="pl-pds">/</span>(http<span class="pl-k">|</span>https):<span class="pl-cce">\/\/</span>(<span class="pl-c1">\w</span><span class="pl-k">+</span>:<span class="pl-k">{0,1}</span><span class="pl-c1">\w</span><span class="pl-k">*</span>@)<span class="pl-k">?</span>(<span class="pl-c1">\S</span><span class="pl-k">+</span>)(:<span class="pl-c1">[<span class="pl-c1">0-9</span>]</span><span class="pl-k">+</span>)<span class="pl-k">?</span>(<span class="pl-cce">\/</span><span class="pl-k">|</span><span class="pl-cce">\/</span>(<span class="pl-c1">[<span class="pl-c1">\w</span>#!:<span class="pl-c1">.</span>?+=&amp;%@!<span class="pl-c1">\-<span class="pl-cce">\/</span></span>]</span>))<span class="pl-k">?</span><span class="pl-pds">/</span>gi</span>);</td>
      </tr>
      <tr>
        <td id="L528" class="blob-num js-line-number" data-line-number="528"></td>
        <td id="LC528" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">if</span>(<span class="pl-smi">imgInfo</span>.<span class="pl-c1">href</span>.<span class="pl-c1">match</span>(hrefRegex)){</td>
      </tr>
      <tr>
        <td id="L529" class="blob-num js-line-number" data-line-number="529"></td>
        <td id="LC529" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> lnktxt<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;a<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L530" class="blob-num js-line-number" data-line-number="530"></td>
        <td id="LC530" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span>(<span class="pl-smi">imgInfo</span>.<span class="pl-smi">linkClass</span>)lnktxt<span class="pl-k">+=</span><span class="pl-s"><span class="pl-pds">&#39;</span> class=&quot;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">imgInfo</span>.<span class="pl-smi">linkClass</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&quot;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L531" class="blob-num js-line-number" data-line-number="531"></td>
        <td id="LC531" class="blob-code blob-code-inner js-file-line">                lnktxt<span class="pl-k">+=</span><span class="pl-s"><span class="pl-pds">&#39;</span> href=&quot;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">imgInfo</span>.<span class="pl-c1">href</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&quot; target=&quot;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">imgInfo</span>.<span class="pl-c1">target</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&quot;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L532" class="blob-num js-line-number" data-line-number="532"></td>
        <td id="LC532" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span>(<span class="pl-smi">imgInfo</span>.<span class="pl-smi">linkRel</span>)lnktxt<span class="pl-k">+=</span><span class="pl-s"><span class="pl-pds">&#39;</span> rel=&quot;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">imgInfo</span>.<span class="pl-smi">linkRel</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&quot;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L533" class="blob-num js-line-number" data-line-number="533"></td>
        <td id="LC533" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span>(<span class="pl-smi">imgInfo</span>.<span class="pl-smi">linkRole</span>)lnktxt<span class="pl-k">+=</span><span class="pl-s"><span class="pl-pds">&#39;</span> role=&quot;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">imgInfo</span>.<span class="pl-smi">linkRole</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&quot;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L534" class="blob-num js-line-number" data-line-number="534"></td>
        <td id="LC534" class="blob-code blob-code-inner js-file-line">                lnktxt<span class="pl-k">+=</span><span class="pl-s"><span class="pl-pds">&#39;</span>&gt;&lt;/a&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L535" class="blob-num js-line-number" data-line-number="535"></td>
        <td id="LC535" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">$img</span>.<span class="pl-en">wrap</span>(lnktxt);</td>
      </tr>
      <tr>
        <td id="L536" class="blob-num js-line-number" data-line-number="536"></td>
        <td id="LC536" class="blob-code blob-code-inner js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L537" class="blob-num js-line-number" data-line-number="537"></td>
        <td id="LC537" class="blob-code blob-code-inner js-file-line">              <span class="pl-smi">$note</span>.<span class="pl-en">val</span>(<span class="pl-smi">context</span>.<span class="pl-en">invoke</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>code<span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L538" class="blob-num js-line-number" data-line-number="538"></td>
        <td id="LC538" class="blob-code blob-code-inner js-file-line">              <span class="pl-smi">$note</span>.<span class="pl-en">change</span>();</td>
      </tr>
      <tr>
        <td id="L539" class="blob-num js-line-number" data-line-number="539"></td>
        <td id="LC539" class="blob-code blob-code-inner js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L540" class="blob-num js-line-number" data-line-number="540"></td>
        <td id="LC540" class="blob-code blob-code-inner js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L541" class="blob-num js-line-number" data-line-number="541"></td>
        <td id="LC541" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">this</span>.<span class="pl-en">showLinkDialog</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">imgInfo</span>){</td>
      </tr>
      <tr>
        <td id="L542" class="blob-num js-line-number" data-line-number="542"></td>
        <td id="LC542" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-smi">$</span>.<span class="pl-en">Deferred</span>(<span class="pl-k">function</span>(<span class="pl-smi">deferred</span>){</td>
      </tr>
      <tr>
        <td id="L543" class="blob-num js-line-number" data-line-number="543"></td>
        <td id="LC543" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> $imageTitle<span class="pl-k">=</span><span class="pl-smi">self</span>.<span class="pl-smi">$dialog</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.note-image-attributes-title<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L544" class="blob-num js-line-number" data-line-number="544"></td>
        <td id="LC544" class="blob-code blob-code-inner js-file-line">              $imageInput<span class="pl-k">=</span><span class="pl-smi">self</span>.<span class="pl-smi">$dialog</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.note-image-input<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L545" class="blob-num js-line-number" data-line-number="545"></td>
        <td id="LC545" class="blob-code blob-code-inner js-file-line">              $imageSrc<span class="pl-k">=</span><span class="pl-smi">self</span>.<span class="pl-smi">$dialog</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.note-image-attributes-src<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L546" class="blob-num js-line-number" data-line-number="546"></td>
        <td id="LC546" class="blob-code blob-code-inner js-file-line">              $imageAlt<span class="pl-k">=</span><span class="pl-smi">self</span>.<span class="pl-smi">$dialog</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.note-image-attributes-alt<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L547" class="blob-num js-line-number" data-line-number="547"></td>
        <td id="LC547" class="blob-code blob-code-inner js-file-line">              $imageClass<span class="pl-k">=</span><span class="pl-smi">self</span>.<span class="pl-smi">$dialog</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.note-image-attributes-class<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L548" class="blob-num js-line-number" data-line-number="548"></td>
        <td id="LC548" class="blob-code blob-code-inner js-file-line">              $imageStyle<span class="pl-k">=</span><span class="pl-smi">self</span>.<span class="pl-smi">$dialog</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.note-image-attributes-style<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L549" class="blob-num js-line-number" data-line-number="549"></td>
        <td id="LC549" class="blob-code blob-code-inner js-file-line">              $imageRole<span class="pl-k">=</span><span class="pl-smi">self</span>.<span class="pl-smi">$dialog</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.note-image-attributes-role<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L550" class="blob-num js-line-number" data-line-number="550"></td>
        <td id="LC550" class="blob-code blob-code-inner js-file-line">              $linkHref<span class="pl-k">=</span><span class="pl-smi">self</span>.<span class="pl-smi">$dialog</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.note-image-attributes-href<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L551" class="blob-num js-line-number" data-line-number="551"></td>
        <td id="LC551" class="blob-code blob-code-inner js-file-line">              $linkTarget<span class="pl-k">=</span><span class="pl-smi">self</span>.<span class="pl-smi">$dialog</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.note-image-attributes-target<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L552" class="blob-num js-line-number" data-line-number="552"></td>
        <td id="LC552" class="blob-code blob-code-inner js-file-line">              $linkClass<span class="pl-k">=</span><span class="pl-smi">self</span>.<span class="pl-smi">$dialog</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.note-image-attributes-link-class<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L553" class="blob-num js-line-number" data-line-number="553"></td>
        <td id="LC553" class="blob-code blob-code-inner js-file-line">              $linkRel<span class="pl-k">=</span><span class="pl-smi">self</span>.<span class="pl-smi">$dialog</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.note-image-attributes-link-rel<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L554" class="blob-num js-line-number" data-line-number="554"></td>
        <td id="LC554" class="blob-code blob-code-inner js-file-line">              $linkRole<span class="pl-k">=</span><span class="pl-smi">self</span>.<span class="pl-smi">$dialog</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.note-image-attributes-link-role<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L555" class="blob-num js-line-number" data-line-number="555"></td>
        <td id="LC555" class="blob-code blob-code-inner js-file-line">              $editBtn<span class="pl-k">=</span><span class="pl-smi">self</span>.<span class="pl-smi">$dialog</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.note-image-attributes-btn<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L556" class="blob-num js-line-number" data-line-number="556"></td>
        <td id="LC556" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span>(<span class="pl-smi">imgInfo</span>.<span class="pl-smi">imgLink</span>){</td>
      </tr>
      <tr>
        <td id="L557" class="blob-num js-line-number" data-line-number="557"></td>
        <td id="LC557" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">$linkHref</span>.<span class="pl-en">val</span>(<span class="pl-smi">imgInfo</span>.<span class="pl-smi">imgLink</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>href<span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L558" class="blob-num js-line-number" data-line-number="558"></td>
        <td id="LC558" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">$linkClass</span>.<span class="pl-en">val</span>(<span class="pl-smi">imgInfo</span>.<span class="pl-smi">imgLink</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>class<span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L559" class="blob-num js-line-number" data-line-number="559"></td>
        <td id="LC559" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">$linkRole</span>.<span class="pl-en">val</span>(<span class="pl-smi">imgInfo</span>.<span class="pl-smi">imgLink</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>role<span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L560" class="blob-num js-line-number" data-line-number="560"></td>
        <td id="LC560" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">$linkTarget</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-en">each</span>(<span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L561" class="blob-num js-line-number" data-line-number="561"></td>
        <td id="LC561" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">if</span>(<span class="pl-en">$</span>(<span class="pl-c1">this</span>).<span class="pl-en">val</span>()<span class="pl-k">==</span><span class="pl-smi">imgInfo</span>.<span class="pl-smi">imgLink</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>target<span class="pl-pds">&#39;</span></span>))<span class="pl-en">$</span>(<span class="pl-c1">this</span>).<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>selected<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>selected<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L562" class="blob-num js-line-number" data-line-number="562"></td>
        <td id="LC562" class="blob-code blob-code-inner js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L563" class="blob-num js-line-number" data-line-number="563"></td>
        <td id="LC563" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">$linkRel</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).<span class="pl-en">each</span>(<span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L564" class="blob-num js-line-number" data-line-number="564"></td>
        <td id="LC564" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">if</span>(<span class="pl-en">$</span>(<span class="pl-c1">this</span>).<span class="pl-en">val</span>()<span class="pl-k">==</span><span class="pl-smi">imgInfo</span>.<span class="pl-smi">imgLink</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>rel<span class="pl-pds">&#39;</span></span>))<span class="pl-en">$</span>(<span class="pl-c1">this</span>).<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>selected<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>selected<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L565" class="blob-num js-line-number" data-line-number="565"></td>
        <td id="LC565" class="blob-code blob-code-inner js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L566" class="blob-num js-line-number" data-line-number="566"></td>
        <td id="LC566" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L567" class="blob-num js-line-number" data-line-number="567"></td>
        <td id="LC567" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">ui</span>.<span class="pl-en">onDialogShown</span>(<span class="pl-smi">self</span>.<span class="pl-smi">$dialog</span>,<span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L568" class="blob-num js-line-number" data-line-number="568"></td>
        <td id="LC568" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">context</span>.<span class="pl-en">triggerEvent</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>dialog.shown<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L569" class="blob-num js-line-number" data-line-number="569"></td>
        <td id="LC569" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">$imageInput</span>.<span class="pl-c1">replaceWith</span>(</td>
      </tr>
      <tr>
        <td id="L570" class="blob-num js-line-number" data-line-number="570"></td>
        <td id="LC570" class="blob-code blob-code-inner js-file-line">              <span class="pl-smi">$imageInput</span>.<span class="pl-en">clone</span>()</td>
      </tr>
      <tr>
        <td id="L571" class="blob-num js-line-number" data-line-number="571"></td>
        <td id="LC571" class="blob-code blob-code-inner js-file-line">                         .<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>change<span class="pl-pds">&#39;</span></span>,<span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L572" class="blob-num js-line-number" data-line-number="572"></td>
        <td id="LC572" class="blob-code blob-code-inner js-file-line">                           <span class="pl-k">var</span> callbacks<span class="pl-k">=</span><span class="pl-smi">options</span>.<span class="pl-smi">callbacks</span>;</td>
      </tr>
      <tr>
        <td id="L573" class="blob-num js-line-number" data-line-number="573"></td>
        <td id="LC573" class="blob-code blob-code-inner js-file-line">                           <span class="pl-k">if</span>(<span class="pl-smi">callbacks</span>.<span class="pl-smi">onImageUpload</span>){</td>
      </tr>
      <tr>
        <td id="L574" class="blob-num js-line-number" data-line-number="574"></td>
        <td id="LC574" class="blob-code blob-code-inner js-file-line">                             <span class="pl-smi">context</span>.<span class="pl-en">triggerEvent</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>image.upload<span class="pl-pds">&#39;</span></span>,<span class="pl-c1">this</span>.<span class="pl-smi">files</span>[<span class="pl-c1">0</span>]);</td>
      </tr>
      <tr>
        <td id="L575" class="blob-num js-line-number" data-line-number="575"></td>
        <td id="LC575" class="blob-code blob-code-inner js-file-line">                           }<span class="pl-k">else</span>{</td>
      </tr>
      <tr>
        <td id="L576" class="blob-num js-line-number" data-line-number="576"></td>
        <td id="LC576" class="blob-code blob-code-inner js-file-line">                             <span class="pl-en">readFileAsDataURL</span>(<span class="pl-c1">this</span>.<span class="pl-smi">files</span>[<span class="pl-c1">0</span>]).<span class="pl-en">then</span>(<span class="pl-k">function</span>(<span class="pl-smi">dataURL</span>){</td>
      </tr>
      <tr>
        <td id="L577" class="blob-num js-line-number" data-line-number="577"></td>
        <td id="LC577" class="blob-code blob-code-inner js-file-line">                               <span class="pl-smi">$imageSrc</span>.<span class="pl-en">val</span>(dataURL)</td>
      </tr>
      <tr>
        <td id="L578" class="blob-num js-line-number" data-line-number="578"></td>
        <td id="LC578" class="blob-code blob-code-inner js-file-line">                             }).<span class="pl-en">fail</span>(<span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L579" class="blob-num js-line-number" data-line-number="579"></td>
        <td id="LC579" class="blob-code blob-code-inner js-file-line">                               <span class="pl-smi">context</span>.<span class="pl-en">triggerEvent</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>image.upload.error<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L580" class="blob-num js-line-number" data-line-number="580"></td>
        <td id="LC580" class="blob-code blob-code-inner js-file-line">                             });</td>
      </tr>
      <tr>
        <td id="L581" class="blob-num js-line-number" data-line-number="581"></td>
        <td id="LC581" class="blob-code blob-code-inner js-file-line">                           }</td>
      </tr>
      <tr>
        <td id="L582" class="blob-num js-line-number" data-line-number="582"></td>
        <td id="LC582" class="blob-code blob-code-inner js-file-line">                         }).<span class="pl-en">val</span>(<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L583" class="blob-num js-line-number" data-line-number="583"></td>
        <td id="LC583" class="blob-code blob-code-inner js-file-line">            );</td>
      </tr>
      <tr>
        <td id="L584" class="blob-num js-line-number" data-line-number="584"></td>
        <td id="LC584" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">$editBtn</span>.<span class="pl-c1">click</span>(<span class="pl-k">function</span>(<span class="pl-smi">e</span>){</td>
      </tr>
      <tr>
        <td id="L585" class="blob-num js-line-number" data-line-number="585"></td>
        <td id="LC585" class="blob-code blob-code-inner js-file-line">              <span class="pl-smi">e</span>.<span class="pl-c1">preventDefault</span>();</td>
      </tr>
      <tr>
        <td id="L586" class="blob-num js-line-number" data-line-number="586"></td>
        <td id="LC586" class="blob-code blob-code-inner js-file-line">              <span class="pl-smi">deferred</span>.<span class="pl-en">resolve</span>({</td>
      </tr>
      <tr>
        <td id="L587" class="blob-num js-line-number" data-line-number="587"></td>
        <td id="LC587" class="blob-code blob-code-inner js-file-line">                imgDom<span class="pl-k">:</span><span class="pl-smi">imgInfo</span>.<span class="pl-smi">imgDom</span>,</td>
      </tr>
      <tr>
        <td id="L588" class="blob-num js-line-number" data-line-number="588"></td>
        <td id="LC588" class="blob-code blob-code-inner js-file-line">                title<span class="pl-k">:</span><span class="pl-smi">$imageTitle</span>.<span class="pl-en">val</span>(),</td>
      </tr>
      <tr>
        <td id="L589" class="blob-num js-line-number" data-line-number="589"></td>
        <td id="LC589" class="blob-code blob-code-inner js-file-line">                src<span class="pl-k">:</span><span class="pl-smi">$imageSrc</span>.<span class="pl-en">val</span>(),</td>
      </tr>
      <tr>
        <td id="L590" class="blob-num js-line-number" data-line-number="590"></td>
        <td id="LC590" class="blob-code blob-code-inner js-file-line">                alt<span class="pl-k">:</span><span class="pl-smi">$imageAlt</span>.<span class="pl-en">val</span>(),</td>
      </tr>
      <tr>
        <td id="L591" class="blob-num js-line-number" data-line-number="591"></td>
        <td id="LC591" class="blob-code blob-code-inner js-file-line">                class<span class="pl-k">:</span><span class="pl-smi">$imageClass</span>.<span class="pl-en">val</span>(),</td>
      </tr>
      <tr>
        <td id="L592" class="blob-num js-line-number" data-line-number="592"></td>
        <td id="LC592" class="blob-code blob-code-inner js-file-line">                style<span class="pl-k">:</span><span class="pl-smi">$imageStyle</span>.<span class="pl-en">val</span>(),</td>
      </tr>
      <tr>
        <td id="L593" class="blob-num js-line-number" data-line-number="593"></td>
        <td id="LC593" class="blob-code blob-code-inner js-file-line">                role<span class="pl-k">:</span><span class="pl-smi">$imageRole</span>.<span class="pl-en">val</span>(),</td>
      </tr>
      <tr>
        <td id="L594" class="blob-num js-line-number" data-line-number="594"></td>
        <td id="LC594" class="blob-code blob-code-inner js-file-line">                href<span class="pl-k">:</span><span class="pl-smi">$linkHref</span>.<span class="pl-en">val</span>(),</td>
      </tr>
      <tr>
        <td id="L595" class="blob-num js-line-number" data-line-number="595"></td>
        <td id="LC595" class="blob-code blob-code-inner js-file-line">                target<span class="pl-k">:</span><span class="pl-smi">$linkTarget</span>.<span class="pl-en">val</span>(),</td>
      </tr>
      <tr>
        <td id="L596" class="blob-num js-line-number" data-line-number="596"></td>
        <td id="LC596" class="blob-code blob-code-inner js-file-line">                linkClass<span class="pl-k">:</span><span class="pl-smi">$linkClass</span>.<span class="pl-en">val</span>(),</td>
      </tr>
      <tr>
        <td id="L597" class="blob-num js-line-number" data-line-number="597"></td>
        <td id="LC597" class="blob-code blob-code-inner js-file-line">                linkRel<span class="pl-k">:</span><span class="pl-smi">$linkRel</span>.<span class="pl-en">val</span>(),</td>
      </tr>
      <tr>
        <td id="L598" class="blob-num js-line-number" data-line-number="598"></td>
        <td id="LC598" class="blob-code blob-code-inner js-file-line">                linkRole<span class="pl-k">:</span><span class="pl-smi">$linkRole</span>.<span class="pl-en">val</span>()</td>
      </tr>
      <tr>
        <td id="L599" class="blob-num js-line-number" data-line-number="599"></td>
        <td id="LC599" class="blob-code blob-code-inner js-file-line">              });</td>
      </tr>
      <tr>
        <td id="L600" class="blob-num js-line-number" data-line-number="600"></td>
        <td id="LC600" class="blob-code blob-code-inner js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L601" class="blob-num js-line-number" data-line-number="601"></td>
        <td id="LC601" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">$imageTitle</span>.<span class="pl-en">val</span>(<span class="pl-smi">imgInfo</span>.<span class="pl-c1">title</span>).<span class="pl-smi">focus</span>;</td>
      </tr>
      <tr>
        <td id="L602" class="blob-num js-line-number" data-line-number="602"></td>
        <td id="LC602" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">$imageSrc</span>.<span class="pl-en">val</span>(<span class="pl-smi">imgInfo</span>.<span class="pl-smi">src</span>)</td>
      </tr>
      <tr>
        <td id="L603" class="blob-num js-line-number" data-line-number="603"></td>
        <td id="LC603" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">$imageAlt</span>.<span class="pl-en">val</span>(<span class="pl-smi">imgInfo</span>.<span class="pl-c1">alt</span>);</td>
      </tr>
      <tr>
        <td id="L604" class="blob-num js-line-number" data-line-number="604"></td>
        <td id="LC604" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">$imageClass</span>.<span class="pl-en">val</span>(<span class="pl-smi">imgInfo</span>.<span class="pl-smi">class</span>);</td>
      </tr>
      <tr>
        <td id="L605" class="blob-num js-line-number" data-line-number="605"></td>
        <td id="LC605" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">$imageStyle</span>.<span class="pl-en">val</span>(<span class="pl-smi">imgInfo</span>.<span class="pl-c1">style</span>);</td>
      </tr>
      <tr>
        <td id="L606" class="blob-num js-line-number" data-line-number="606"></td>
        <td id="LC606" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">$imageRole</span>.<span class="pl-en">val</span>(<span class="pl-smi">imgInfo</span>.<span class="pl-smi">role</span>);</td>
      </tr>
      <tr>
        <td id="L607" class="blob-num js-line-number" data-line-number="607"></td>
        <td id="LC607" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">self</span>.<span class="pl-en">bindEnterKey</span>($editBtn);</td>
      </tr>
      <tr>
        <td id="L608" class="blob-num js-line-number" data-line-number="608"></td>
        <td id="LC608" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">self</span>.<span class="pl-en">bindLabels</span>();</td>
      </tr>
      <tr>
        <td id="L609" class="blob-num js-line-number" data-line-number="609"></td>
        <td id="LC609" class="blob-code blob-code-inner js-file-line">          });</td>
      </tr>
      <tr>
        <td id="L610" class="blob-num js-line-number" data-line-number="610"></td>
        <td id="LC610" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">ui</span>.<span class="pl-en">onDialogHidden</span>(<span class="pl-smi">self</span>.<span class="pl-smi">$dialog</span>,<span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L611" class="blob-num js-line-number" data-line-number="611"></td>
        <td id="LC611" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">$editBtn</span>.<span class="pl-en">off</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>click<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L612" class="blob-num js-line-number" data-line-number="612"></td>
        <td id="LC612" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span>(<span class="pl-smi">deferred</span>.<span class="pl-en">state</span>()<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&#39;</span>pending<span class="pl-pds">&#39;</span></span>)<span class="pl-smi">deferred</span>.<span class="pl-en">reject</span>();</td>
      </tr>
      <tr>
        <td id="L613" class="blob-num js-line-number" data-line-number="613"></td>
        <td id="LC613" class="blob-code blob-code-inner js-file-line">          });</td>
      </tr>
      <tr>
        <td id="L614" class="blob-num js-line-number" data-line-number="614"></td>
        <td id="LC614" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">ui</span>.<span class="pl-en">showDialog</span>(<span class="pl-smi">self</span>.<span class="pl-smi">$dialog</span>);</td>
      </tr>
      <tr>
        <td id="L615" class="blob-num js-line-number" data-line-number="615"></td>
        <td id="LC615" class="blob-code blob-code-inner js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L616" class="blob-num js-line-number" data-line-number="616"></td>
        <td id="LC616" class="blob-code blob-code-inner js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L617" class="blob-num js-line-number" data-line-number="617"></td>
        <td id="LC617" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L618" class="blob-num js-line-number" data-line-number="618"></td>
        <td id="LC618" class="blob-code blob-code-inner js-file-line">  });</td>
      </tr>
      <tr>
        <td id="L619" class="blob-num js-line-number" data-line-number="619"></td>
        <td id="LC619" class="blob-code blob-code-inner js-file-line">}));</td>
      </tr>
</table>

  </div>

</div>

<button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
<div id="jump-to-line" style="display:none">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>


  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>

    </div>
  </div>

  </div>

      <div class="container site-footer-container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links float-right">
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2017 <span title="0.20770s from github-fe-a93be76.cp1-iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



  

  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
    You can't perform that action at this time.
  </div>


    
    <script crossorigin="anonymous" integrity="sha256-dr5Syfrrrr6EoLg5PDwqrHvtp8muzesFKDjKr1Db8Hs=" src="https://assets-cdn.github.com/assets/frameworks-76be52c9faebaebe84a0b8393c3c2aac7beda7c9aecdeb052838caaf50dbf07b.js"></script>
    <script async="async" crossorigin="anonymous" integrity="sha256-FMw6ObmOBiV7FBy7A5Rso7zx7yD8qxxv3NumSyZIAII=" src="https://assets-cdn.github.com/assets/github-14cc3a39b98e06257b141cbb03946ca3bcf1ef20fcab1c6fdcdba64b26480082.js"></script>
    
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
  </div>
</div>


  </body>
</html>
