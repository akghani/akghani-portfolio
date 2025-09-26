# -----------------------------
# Academic Portfolio Setup Script
# -----------------------------

# 1️⃣ Activate or initialize renv
if (!requireNamespace("renv", quietly = TRUE)) {
  install.packages("renv", type = "binary")
}

# Activate project-specific library
renv::activate()

# If renv not yet initialized, initialize it
if (!file.exists("renv.lock")) {
  renv::init()
} else {
  message("renv already initialized. Restoring environment...")
  renv::restore()
}

# 2️⃣ Install required packages for the portfolio
packages_needed <- c(
  "yaml",       # Quarto Markdown dependency
  "quarto",     # optional R wrapper for Quarto CLI
  "knitr",      # optional for R Markdown
  "tidyverse",  # dplyr, ggplot2, etc.
  "bslib",      # optional for Bootstrap theming in Quarto
  "usethis",     # optional project helpers
  "httpuv"      # optional for serving local content
)

# Install missing packages in the project library
for (pkg in packages_needed) {
  if (!requireNamespace(pkg, quietly = TRUE)) {
    renv::install(pkg)
  }
}

# 3️⃣ Snapshot the environment
renv::snapshot()

# 4️⃣ Optional: check status
renv::status()

