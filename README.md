# Supercell API Client 🌟

## Overview

`supercell-api` is a simple and powerful JavaScript library for interacting with the APIs of Supercell games, such as Brawl Stars, Clash of Clans, and others. It is designed to simplify the development of applications and tools that utilize data from Supercell games, providing an intuitive and user-friendly interface for working with the API.

## Features

- **Easy Data Access** 🚀  
  Fetch user, clan, resource, and game statistics data in just a few lines of code.

- **Asynchronous Requests** ⏳  
  The library supports asynchronous operations, allowing for efficient data loading and improved responsiveness of your applications.

- **Intuitive Methods** 🛠️  
  The library's syntax is designed to be as understandable as possible. For example:

    ```javascript
    import SupercellClient from '@vladnet14/supercell-api';

    const TOKEN = 'your-token';

    async function main() {
      const api = new SupercellClient({ token: TOKEN, apiType: 'clashofclans', useProxy: true });

      try {
        // Get player
        const player = await api.endpoints.getPlayer('Y90PCRLGC');
        console.log(`Player: ${player.name}, Level: ${player.expLevel}`);

        // Get clan
        const clan = await api.endpoints.getClan('2J2GQPRCV');
        console.log(`Clan: ${clan.name}, Level: ${clan.clanLevel}`);

        // Search clan
        const clans = await api.endpoints.searchClans({ name: 'CRUVO' });
        console.log('Found clans:', clans.items?.map((c) => c.name));

        // Get locations
        const locations = await api.endpoints.getLocations();
        console.log('Locations:', locations.items?.map((l) => l.name));
      } catch (error) {
        console.error(error);
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

## Documentation

Visit our [documentation website](https://docs.cruvo-project.ru/) for detailed information:

- 📚 Complete API methods reference
- 🎮 Examples for each Supercell API
- 🔧 Setup and configuration guide
- 🚀 Interactive code examples

The documentation provides comprehensive guides and examples to help you get started quickly with the Supercell API Client.

## Installation

Install the library using npm:

```bash
npm install @vladnet14/supercell-api
```

## Conclusion

With `supercell-api`, developing applications based on Supercell data becomes easier and more convenient, allowing you to focus on creating amazing features and experiences for players! 🌈✨

