<template>
    <div>
        <h1>Projects <small>({{repos.length}})</small></h1>
        <div v-for="repo in paginatedRepos" :key="repo.id" class="repo">
            <h2>
                {{ repo.name }}
                <a v-if="repo.homepage" :href="repo.homepage" target="_blank">
                    link
                </a>
            </h2>
            <p>{{ repo.description }}</p>
            <ul>
                <li v-for="language in repo.languages" :key="language">
                    {{ language.name }} <i>{{ Math.round(language.percentage * 10) / 10 }}%</i>
                </li>
            </ul>
            <p><a :href="repo.link" target="_blank">GitHub Repository Link</a></p>
        </div>
        <div style="text-align: center" class="pagination">
            <span class="pagination-button" @click="prevPage">Prev</span>
            <span v-for="page in pages" :key="page" @click="goToPage(page)">
                <span v-if="page === currentPage"><u>{{ page + 1 }}</u></span>
                <span v-else>{{ page + 1 }}</span>
            </span>
            <span class="pagination-button" @click="nextPage">Next</span>
        </div>
    </div>
</template>

<style scoped>
.repo>h2 {
    margin-bottom: 0.2em;
}

.repo>p {
    margin: 0;
}

.repo>ul {
    margin-top: 0;
    margin-bottom: 0;
}

.repo i {
    font-size: 0.8em;
}

h2 > a {
    font-size: 0.8em;
}

.pagination {
    display: flex;
    gap: 1em;
    justify-content: center;
}

.pagination-button {
    font-size: 0.8em;
    text-transform: uppercase;
    font-weight: bold;
}

small {
    font-size: 0.7em;
}
</style>

<script>
export default {
  name: "Projects",
  props: {
    username: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      repos: [],
      currentPage: 0,
      pageSize: 5,
    };
  },
  computed: {
    paginatedRepos() {
      // Calculate the starting and ending indices of the current page
      const startIndex = this.currentPage * this.pageSize;
      const endIndex = startIndex + this.pageSize;
            // Return a slice of the repos array that contains only the repositories
            // for the current page
            return this.repos.slice(startIndex, endIndex);
        },
        pages() {
            // Calculate the number of pages needed to display all the repositories
            // using the page size
            return Array.from(
                { length: Math.ceil(this.repos.length / this.pageSize) },
                (_, index) => index
            );
        },
    },
    created() {
        // Fetch the list of repositories for the given GitHub user
        const url = `https://api.github.com/users/${this.username}/repos`;
        fetch(url)
            .then((response) => response.json())
            .then((repos) => {
                // Parse the JSON response and extract the relevant information
                // (name, description, languages) for each repository
                const parsedRepos = repos.map((repo) => {
                    // Get the languages used in the repository by fetching the
                    // repository's languages endpoint
                    const languagesUrl = `https://api.github.com/repos/${this.username}/${repo.name}/languages`;
                    return fetch(languagesUrl)
                        .then((response) => response.json())
                        .then((languages) => {
                            // Calculate the total number of lines of code in the repository
                            // by adding up the values for each language
                            const totalLinesOfCode = Object.values(languages).reduce(
                                (total, lines) => total + lines,
                                0
                            );

                            // Calculate the percentage of the project each language represents
                            // as a percentage of the total number of lines of code
                            const parsedLanguages = Object.entries(languages).map(
                                ([name, lines]) => ({
                                    name,
                                    percentage: (lines / totalLinesOfCode) * 100,
                                })
                            );

                            return {
                                name: repo.name,
                                description: repo.description,
                                languages: parsedLanguages,
                                homepage: repo.homepage,
                                link: repo.html_url
                            };
                        });
                });
                // Wait for all the language information to be fetched for each repository
                // and then save the parsed repositories in the component's data
                Promise.all(parsedRepos).then((repos) => (this.repos = repos.filter(repo => repo.name !== 'amazonpriime.github.io')));
            });
    },
    methods: {
        goToPage(page) {
            // Set the current page index to the given page
            this.currentPage = page;
        },
        prevPage() {
            // Decrement the current page index, but don't go below 0
            this.currentPage = Math.max(this.currentPage - 1, 0);
        },
        nextPage() {
            // Increment the current page index, but don't go above the last page
            this.currentPage = Math.min(
                this.currentPage + 1,
                Math.ceil(this.repos.length / this.pageSize) - 1
            );
        },
    },
};
</script>
