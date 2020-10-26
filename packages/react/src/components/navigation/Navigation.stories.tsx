/* eslint-disable @typescript-eslint/ban-ts-ignore */
import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';

import { Navigation } from './Navigation';
import { NavigationRow } from './navigationRow/NavigationRow';
import { NavigationItem } from './navigationItem/NavigationItem';
import { NavigationUser } from './navigationUser/NavigationUser';
import { NavigationSearch } from './navigationSearch/NavigationSearch';
import { NavigationLanguageSelector } from './navigationLanguageSelector/NavigationLanguageSelector';
import { NavigationDropdown } from './navigationDropdown/NavigationDropdown';
import { IconSignout } from '../../icons';

type LanguageOption = {
  label: string;
  value: string;
};

export default {
  component: Navigation,
  title: 'Components/Navigation',
  subcomponents: {
    NavigationRow,
    NavigationItem,
    NavigationDropdown,
    NavigationSearch,
    NavigationUser,
    NavigationLanguageSelector,
  },
  parameters: {
    controls: { expanded: true },
    layout: 'fullscreen',
  },
  args: {
    title: 'Helsinki Design System',
    titleAriaLabel: 'Helsinki: Helsinki Design System',
    titleUrl: 'https://hel.fi',
    theme: 'light',
    menuCloseAriaLabel: 'Close menu',
    menuOpenAriaLabel: 'Open menu',
    skipTo: '#content',
    skipToContentLabel: 'Skip to main content',
    searchLabel: 'Search',
    searchPlaceholder: 'Search page',
    authenticated: false,
    userName: 'John Doe',
  },
  argTypes: {
    theme: { control: { type: 'inline-radio', options: ['light', 'dark'] } },
  },
};

export const Default = ({ searchLabel, searchPlaceholder, authenticated, userName, ...args }) => (
  // @ts-ignore
  <Navigation {...args}>
    {/* NAVIGATION ROW */}
    <Navigation.Row>
      <Navigation.Item href="#" label="Link" onClick={(e) => e.preventDefault()} />
      <Navigation.Item href="#" label="Link" onClick={(e) => e.preventDefault()} />
      <Navigation.Item href="#" label="Link" onClick={(e) => e.preventDefault()} />
      <Navigation.Item href="#" label="Link" onClick={(e) => e.preventDefault()} />
      <Navigation.Dropdown label="Dropdown">
        <Navigation.Item href="#" label="Link" onClick={(e) => e.preventDefault()} />
        <Navigation.Item href="#" label="Link" onClick={(e) => e.preventDefault()} />
        <Navigation.Item href="#" label="Link" onClick={(e) => e.preventDefault()} />
        <Navigation.Item href="#" label="Link" onClick={(e) => e.preventDefault()} />
      </Navigation.Dropdown>
    </Navigation.Row>

    {/* NAVIGATION ACTIONS */}
    <Navigation.Actions>
      {/* SEARCH */}
      <Navigation.Search
        searchLabel={searchLabel}
        searchPlaceholder={searchPlaceholder}
        onSearch={(e) => action('onSearch')(e)}
        onSearchChange={(e) => action('onSearchChange')(e)}
      />

      {/* USER */}
      <Navigation.User authenticated={authenticated} label="Sign in" userName={userName}>
        <Navigation.Item label="Link" href="#" variant="secondary" onClick={(e) => e.preventDefault()} />
        <Navigation.Item
          label="Sign out"
          href="#"
          icon={<IconSignout aria-hidden />}
          variant="supplementary"
          onClick={(e) => e.preventDefault()}
        />
      </Navigation.User>

      {/* LANGUAGE SELECTOR */}
      <Navigation.LanguageSelector label="FI">
        <Navigation.Item href="#" onClick={(e) => e.preventDefault()} label="Suomeksi" />
        <Navigation.Item href="#" onClick={(e) => e.preventDefault()} label="På svenska" />
        <Navigation.Item href="#" onClick={(e) => e.preventDefault()} label="In English" />
        <Navigation.Item href="#" onClick={(e) => e.preventDefault()} label="En français" />
        <Navigation.Item href="#" onClick={(e) => e.preventDefault()} label="Auf deutsch" />
        <Navigation.Item href="#" onClick={(e) => e.preventDefault()} label="По-русски" />
      </Navigation.LanguageSelector>
    </Navigation.Actions>
  </Navigation>
);

export const Inline = ({ searchLabel, searchPlaceholder, authenticated, userName, ...args }) => {
  return (
    // @ts-ignore
    <Navigation {...args}>
      {/* NAVIGATION ROW */}
      <Navigation.Row variant="inline">
        <Navigation.Item href="#" label="Link" onClick={(e) => e.preventDefault()} />
        <Navigation.Item href="#" label="Link" onClick={(e) => e.preventDefault()} />
        <Navigation.Dropdown label="Dropdown">
          <Navigation.Item href="#" label="Link" onClick={(e) => e.preventDefault()} />
          <Navigation.Item href="#" label="Link" onClick={(e) => e.preventDefault()} />
          <Navigation.Item href="#" label="Link" onClick={(e) => e.preventDefault()} />
          <Navigation.Item href="#" label="Link" onClick={(e) => e.preventDefault()} />
        </Navigation.Dropdown>
      </Navigation.Row>

      {/* NAVIGATION ACTIONS */}
      <Navigation.Actions>
        {/* SEARCH */}
        <Navigation.Search
          searchLabel={searchLabel}
          searchPlaceholder={searchPlaceholder}
          onSearch={(e) => action('onSearch')(e)}
          onSearchChange={(e) => action('onSearchChange')(e)}
        />

        {/* USER */}
        <Navigation.User authenticated={authenticated} label="Sign in" userName={userName}>
          <Navigation.Item label="Link" href="#" variant="secondary" onClick={(e) => e.preventDefault()} />
          <Navigation.Item
            label="Sign out"
            href="#"
            icon={<IconSignout aria-hidden />}
            variant="supplementary"
            onClick={(e) => e.preventDefault()}
          />
        </Navigation.User>

        {/* LANGUAGE SELECTOR */}
        <Navigation.LanguageSelector label="FI">
          <Navigation.Item href="#" onClick={(e) => e.preventDefault()} label="Suomeksi" />
          <Navigation.Item href="#" onClick={(e) => e.preventDefault()} label="På svenska" />
          <Navigation.Item href="#" onClick={(e) => e.preventDefault()} label="In English" />
          <Navigation.Item href="#" onClick={(e) => e.preventDefault()} label="En français" />
          <Navigation.Item href="#" onClick={(e) => e.preventDefault()} label="Auf deutsch" />
          <Navigation.Item href="#" onClick={(e) => e.preventDefault()} label="По-русски" />
        </Navigation.LanguageSelector>
      </Navigation.Actions>
    </Navigation>
  );
};

export const CustomTheme = ({ searchLabel, searchPlaceholder, authenticated, userName, ...args }) => {
  return (
    // @ts-ignore
    <Navigation {...args}>
      {/* NAVIGATION ROW */}
      <Navigation.Row>
        <Navigation.Item href="#" label="Link" onClick={(e) => e.preventDefault()} />
        <Navigation.Item href="#" label="Link" onClick={(e) => e.preventDefault()} />
        <Navigation.Item href="#" label="Link" onClick={(e) => e.preventDefault()} />
        <Navigation.Item href="#" label="Link" onClick={(e) => e.preventDefault()} />
        <Navigation.Dropdown label="Dropdown">
          <Navigation.Item href="#" label="Link" onClick={(e) => e.preventDefault()} />
          <Navigation.Item href="#" label="Link" onClick={(e) => e.preventDefault()} />
          <Navigation.Item href="#" label="Link" onClick={(e) => e.preventDefault()} />
          <Navigation.Item href="#" label="Link" onClick={(e) => e.preventDefault()} />
        </Navigation.Dropdown>
      </Navigation.Row>

      {/* NAVIGATION ACTIONS */}
      <Navigation.Actions>
        {/* SEARCH */}
        <Navigation.Search
          searchLabel={searchLabel}
          searchPlaceholder={searchPlaceholder}
          onSearch={(e) => action('onSearch')(e)}
          onSearchChange={(e) => action('onSearchChange')(e)}
        />

        {/* USER */}
        <Navigation.User authenticated={authenticated} label="Sign in" userName={userName}>
          <Navigation.Item label="Link" href="#" variant="secondary" onClick={(e) => e.preventDefault()} />
          <Navigation.Item
            label="Sign out"
            href="#"
            icon={<IconSignout aria-hidden />}
            variant="supplementary"
            onClick={(e) => e.preventDefault()}
          />
        </Navigation.User>

        {/* LANGUAGE SELECTOR */}
        <Navigation.LanguageSelector label="FI">
          <Navigation.Item href="#" onClick={(e) => e.preventDefault()} label="Suomeksi" />
          <Navigation.Item href="#" onClick={(e) => e.preventDefault()} label="På svenska" />
          <Navigation.Item href="#" onClick={(e) => e.preventDefault()} label="In English" />
          <Navigation.Item href="#" onClick={(e) => e.preventDefault()} label="En français" />
          <Navigation.Item href="#" onClick={(e) => e.preventDefault()} label="Auf deutsch" />
          <Navigation.Item href="#" onClick={(e) => e.preventDefault()} label="По-русски" />
        </Navigation.LanguageSelector>
      </Navigation.Actions>
    </Navigation>
  );
};
CustomTheme.storyName = 'Custom theme';
CustomTheme.args = {
  theme: {
    '--header-background-color': 'var(--color-engel)',
    '--header-color': 'var(--color-black-90)',
    '--header-divider-color': 'var(--color-black-20)',
    '--header-focus-outline-color': 'var(--color-black)',
    '--mobile-menu-background-color': 'var(--color-white)',
    '--mobile-menu-color': 'var(--color-black-90)',
    '--navigation-row-background-color': 'var(--color-white)',
    '--navigation-row-color': 'var(--color-black-90)',
    '--navigation-row-focus-outline-color': 'var(--color-coat-of-arms-blue)',
  },
};
CustomTheme.argTypes = {
  theme: {
    control: {
      type: 'object',
    },
  },
};

export const Example = ({ userName, ...args }) => {
  const i18n = {
    title: {
      fi: 'Helsingin kaupunki',
      sv: 'Helsingfors stad',
      en: 'City of Helsinki',
    },
    titleAria: {
      fi: 'Helsinki: Helsingin kaupunki',
      sv: 'Helsingfors: Helsingfors stad',
      en: 'Helsinki: City of Helsinki',
    },
    search: {
      fi: 'Hae',
      sv: 'Sök',
      en: 'Search',
    },
    searchPlaceholder: {
      fi: 'Hae sivustolta',
      sv: 'Sök på webbplatsen',
      en: 'Search page',
    },
    login: {
      fi: 'Kirjaudu sisään',
      sv: 'Logga in',
      en: 'Sign in',
    },
    loginAria: {
      fi: 'Käyttäjä:',
      sv: 'Användare:',
      en: 'User:',
    },
    logout: {
      fi: 'Kirjaudu ulos',
      sv: 'Logga ut',
      en: 'Sign out',
    },
    skip: {
      fi: 'Siirry sivun pääsisältöön',
      sv: 'Gå till huvudinnehåll',
      en: 'Skip to main content',
    },
    languageSelectorLabel: {
      fi: 'Kieli: Suomi',
      sv: 'Språk: Svenska',
      en: 'Language: English',
    },
    navigation: [
      {
        fi: 'Kaupunki ja hallinto',
        sv: 'Staden och förvaltning',
        en: 'City administration',
      },
      {
        fi: 'Liikenne ja kartat',
        sv: 'Kartor och trafik',
        en: 'Maps and transport',
      },
      {
        fi: 'Kasvatus ja koulutus',
        sv: 'Fostran och utbildning',
        en: 'Childhood and education',
      },
      {
        fi: 'Kulttuuri ja vapaa-aika',
        sv: 'Kultur och fritid',
        en: 'Culture and leisure',
      },
    ],
    navigationDropdown: {
      label: {
        fi: 'Asuminen ja ympäristö',
        sv: 'Boende och miljö',
        en: 'Housing and environment',
      },
      options: [
        {
          fi: 'Asuminen',
          sv: 'Boende',
          en: 'Housing',
        },
        {
          fi: 'Kaavoitus ja suunnittelu',
          sv: 'Planläggning',
          en: 'Planning',
        },
        {
          fi: 'Rakentaminen',
          sv: 'Byggande',
          en: 'Construction',
        },
      ],
    },
  };
  const languages: LanguageOption[] = [
    { label: 'Suomeksi', value: 'fi' },
    { label: 'På svenska', value: 'sv' },
    { label: 'In English', value: 'en' },
  ];

  const [authenticated, setAuthenticated] = useState(false);
  const [language, setLanguage] = useState<string>('fi');
  const [active, setActive] = useState<string>();

  // show helsingfors logo if swedish is selected as the language
  const logoLanguage = language === 'sv' ? 'sv' : 'fi';

  return (
    <>
      {/* @ts-ignore */}
      <Navigation
        {...args}
        logoLanguage={logoLanguage}
        title={i18n.title[language]}
        titleAriaLabel={i18n.titleAria[language]}
        skipToContentLabel={i18n.skip[language]}
      >
        {/* NAVIGATION ROW */}
        <Navigation.Row>
          {i18n.navigation.map((item, index) => {
            return (
              <Navigation.Item
                key={item[language]}
                href="#"
                active={active === `link-${index}`}
                label={item[language]}
                onClick={(e) => {
                  e.preventDefault();
                  setActive(`link-${index}`);
                }}
              />
            );
          })}
          <Navigation.Dropdown active={active === 'dropdown'} label={i18n.navigationDropdown.label[language]}>
            {i18n.navigationDropdown.options.map((option, index) => {
              return (
                <Navigation.Item
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  label={option[language]}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setActive('dropdown');
                  }}
                />
              );
            })}
          </Navigation.Dropdown>
        </Navigation.Row>

        {/* NAVIGATION ACTIONS */}
        <Navigation.Actions>
          {/* SEARCH */}
          <Navigation.Search
            searchLabel={i18n.search[language]}
            searchPlaceholder={i18n.searchPlaceholder[language]}
            onSearch={(e) => action('onSearch')(e)}
            onSearchChange={(e) => action('onSearchChange')(e)}
          />

          {/* USER */}
          <Navigation.User
            authenticated={authenticated}
            buttonAriaLabel={`${i18n.loginAria[language]} ${userName}`}
            label={i18n.login[language]}
            onSignIn={() => setAuthenticated(true)}
            userName={userName}
          >
            <Navigation.Item
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setAuthenticated(false);
              }}
              variant="supplementary"
              label={i18n.logout[language]}
              icon={<IconSignout aria-hidden />}
            />
          </Navigation.User>

          {/* LANGUAGE SELECTOR */}
          <Navigation.LanguageSelector
            label={language.toUpperCase()}
            buttonAriaLabel={i18n.languageSelectorLabel[language]}
          >
            {languages.map((lang) => {
              return (
                <Navigation.Item
                  key={lang.value}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setLanguage(lang.value);
                  }}
                  label={lang.label}
                />
              );
            })}
          </Navigation.LanguageSelector>
        </Navigation.Actions>
      </Navigation>
    </>
  );
};
