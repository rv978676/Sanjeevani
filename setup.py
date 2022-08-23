from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in sanjeevani/__init__.py
from sanjeevani import __version__ as version

setup(
	name="sanjeevani",
	version=version,
	description="Custom App by Arkay ap for Sanjeevani",
	author="Arkay ERP",
	author_email="info@arkayapps.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
