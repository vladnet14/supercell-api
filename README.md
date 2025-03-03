# Supercell API Client 🌟

## Overview

`supercell-api` is a simple and powerful JavaScript library for interacting with the APIs of Supercell games, such as Brawl Stars, Clash of Clans, and others. It is designed to simplify the development of applications and tools that utilize data from Supercell games, providing an intuitive and user-friendly interface for working with the API.

## Features

- **Easy Data Access** 🚀  
  Fetch user, clan, resource, and game statistics data in just a few lines of code.

- **Asynchronous Requests** ⏳  
  The library supports asynchronous operations, allowing for efficient data loading and improved responsiveness of your applications.

- **Data Caching** ⚡  
  Built-in caching mechanisms help reduce the number of API requests and speed up data retrieval.

- **Support for All Gaming Platforms** 🎮  
  Works with all Supercell gaming platforms, including mobile devices and PC.

- **Intuitive Methods** 🛠️  
  The library's syntax is designed to be as understandable as possible. For example:

    ```javascript
    import SupercellAPI from '@vladnet14/supercell-api';

    async function main() {
      const api = new SupercellAPI('your-token');

      try {
        // Get player
        const player = await api.getPlayer('P0G0R2L9');
        console.log(`Player: ${player.name}, Level: ${player.expLevel}`);

        // Get clan
        const clan = await api.getClan('9P2PQULR');
        console.log(`Clan: ${clan.name}, Level: ${clan.clanLevel}`);
  
        // Search clan
        const clans = await api.searchClans({ name: 'Elite', minMembers: 30 });
        console.log('Found clans:', clans.items?.map((c) => c.name));
  
        // Locations
        const locations = await api.getLocations(5);
        console.log('Locations:', locations.items?.map((l) => l.name));
      } catch (error) {
          console.error(error.message);
      }
    }

    main();
    ```

- **Filtering and Sorting Capabilities** 🔍  
  Easily retrieve only the necessary data with options for filtering and sorting by various parameters.

- **Documentation and Examples** 📚  
  Comprehensive documentation with usage examples to help you get started quickly and leverage the full power of the library.

- **Community Support** 👫  
  An active community of developers ready to help with any questions and improve the library based on user feedback.

## Installation

Install the library using npm:

```bash
npm install @vladnet14/supercell-api
```

## Conclusion

With `supercell-api`, developing applications based on Supercell data becomes easier and more convenient, allowing you to focus on creating amazing features and experiences for players! 🌈✨

